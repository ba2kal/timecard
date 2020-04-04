import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const TimeCard = props => {
  const [workTimeList, setWorkTimeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        url: "saharaApi/workTime/list/",
        method: "get",
        params: {
          userEmail: "kimdh4130@gmail.com"
        }
      });
      if (result.data.length == 0) {
        console.log(result);
        setWorkTimeList([{ title: " ", date: " " }]);
      } else {
        console.log(result.data);
        setWorkTimeList(result.data);
      }
    };
    fetchData();
  }, []);

  var rootEl = document.documentElement;
  var $modals = Array.prototype.slice.call(
    document.querySelectorAll(".modal"),
    0
  );

  const inputWorkTime = el => {
    let $target = document.getElementById("modal");
    rootEl.classList.add("is-clipped");
    $target.classList.add("is-active");
    let dateLabel = document.getElementById("date-label");
    let dateHidden = document.getElementById("date-hidden");
    dateLabel.innerText = el.dateStr;
    dateHidden.value = el.dateStr;
  };

  const closeModal = () => {
    rootEl.classList.remove("is-clipped");
    $modals.forEach(function($el) {
      $el.classList.remove("is-active");
    });
  };

  const onDelete = data => {
    console.log(data)
    axios({
      url: "saharaApi/workTime/delete/",
      method: "delete",
      data: {
        work_time_id: "kimdh4130@gmail.com"+data.workDate,
        user_email_address: "kimdh4130@gmail.com"
      }
    }).then(response => {
      if (response.status === 200 || response.status === 201) {
        rootEl.classList.remove("is-clipped");
        $modals.forEach(function($el) {
          $el.classList.remove("is-active");
        });
        setWorkTimeList(response.data);
      }
    })
    .catch(response => {
      location.href = "/error";
    });
  }

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = data => {
    axios({
      url: "saharaApi/workTime/create/",
      method: "post",
      data: {
        work_time_id: "kimdh4130@gmail.com"+data.workDate,
        user_email_address: "kimdh4130@gmail.com",
        work_type: 0,
        work_date: data.workDate,
        work_start_time: data.startHour + ":" + data.startMin,
        work_end_time: data.endHour + ":" + data.endMin
      }
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          rootEl.classList.remove("is-clipped");
          $modals.forEach(function($el) {
            $el.classList.remove("is-active");
          });
          setWorkTimeList(response.data);
        }
      })
      .catch(response => {
        location.href = "/error";
      });
  };

  const loadingFlg = workTimeList.length == 0;

  return (
    <div>
      {loadingFlg ? (
        <div>loading...</div>
      ) : (
        <FullCalendar
          defaultVIew="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={workTimeList}
          dateClick={inputWorkTime}
        />
      )}
      <div id="modal" className="modal">
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <label className="label" id="date-label"></label>
                  <input
                    type="hidden"
                    id="date-hidden"
                    ref={register}
                    name="workDate"
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Start Time</label>
                <div className="field has-addons">
                  <div className="control">
                    <div className="select is-danger is-1 is-size-5">
                      <select ref={register} name="startHour">
                        <option value="08">08</option>
                        <option value="09" selected>
                          09
                        </option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                      </select>
                    </div>
                  </div>
                  <span className="column control is-1 is-size-5 has-text-centered has-text-weight-bold">
                    :
                  </span>
                  <div className="control">
                    <div className="select is-danger is-1 is-size-5">
                      <select ref={register} name="startMin">
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">End Time</label>
                <div className="field has-addons">
                  <div className="select is-danger is-1 is-size-5">
                    <select ref={register} name="endHour">
                      <option value="08">08</option>
                      <option value="09" selected>
                        09
                      </option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                    </select>
                  </div>
                  <span className="column control is-1 is-size-5 has-text-centered has-text-weight-bold">
                    :
                  </span>
                  <div className="select is-danger is-1 is-size-5">
                    <select ref={register} name="endMin">
                      <option value="00">00</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button type="submit" className="button is-link">
                    Submit
                  </button>
                </div>
                <div className="control">
                  <button type="submit" className="button is-link" onClick={handleSubmit(onDelete)}>
                    Delete
                  </button>
                </div>
                <div className="control">
                  <button
                    type="button"
                    className="button is-link is-light"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={closeModal}
        ></button>
      </div>
    </div>
  );
};

export default TimeCard;
