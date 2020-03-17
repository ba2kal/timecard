import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
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
          userEmail: "test@test.com"
        }
      });
      setWorkTimeList(result.data.results);
    };
    fetchData();
  }, []);

  console.log(workTimeList);

  const loadingFlg = (workTimeList.length == 0);

  return (
    <div>
      {loadingFlg ? (
        <h3 class="title is-3">loading...</h3>
      ) : (
        <FullCalendar defaultVIew="dayGridMonth" plugins={[dayGridPlugin]} 
        events={workTimeList}/>
      )}
    </div>
  );
};
export default TimeCard;
