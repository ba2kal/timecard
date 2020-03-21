# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class MCodeInfo(models.Model):
    code_id = models.SmallIntegerField(primary_key=True)
    code_name = models.CharField(max_length=25)
    code_value = models.CharField(max_length=50)
    register_time = models.DateTimeField()
    create_emp = models.CharField(max_length=25, blank=True, null=True)
    update_time = models.DateTimeField()
    update_emp = models.CharField(max_length=25, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'm_code_info'
        unique_together = (('code_id', 'code_name'),)


class MDeptInfo(models.Model):
    dept_id = models.CharField(primary_key=True, max_length=5)
    dept_name = models.CharField(max_length=15)
    dept_comment = models.CharField(max_length=100, blank=True, null=True)
    dept_total_emp = models.SmallIntegerField(blank=True, null=True)
    register_time = models.DateTimeField()
    create_emp = models.CharField(max_length=25, blank=True, null=True)
    update_time = models.DateTimeField()
    update_emp = models.CharField(max_length=25, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'm_dept_info'


class MEmpInfo(models.Model):
    emp_number = models.SmallIntegerField(primary_key=True)
    emp_first_name = models.CharField(max_length=10)
    emp_given_name = models.CharField(max_length=15)
    emp_age = models.SmallIntegerField()
    emp_sex = models.SmallIntegerField()
    emp_birthday = models.DateField()
    emp_dept_id = models.CharField(max_length=5, blank=True, null=True)
    emp_position_code = models.SmallIntegerField(blank=True, null=True)
    emp_engineer_level = models.SmallIntegerField(blank=True, null=True)
    emp_tel = models.CharField(max_length=13, blank=True, null=True)
    emp_postal_code = models.CharField(max_length=8, blank=True, null=True)
    emp_addres = models.CharField(max_length=10, blank=True, null=True)
    emp_join_date = models.DateField(blank=True, null=True)
    emp_promotion_date = models.DateField(blank=True, null=True)
    emp_salary_code = models.SmallIntegerField(blank=True, null=True)
    register_time = models.DateTimeField()
    create_emp = models.CharField(max_length=25, blank=True, null=True)
    update_time = models.DateTimeField()
    update_emp = models.CharField(max_length=25, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'm_emp_info'


class MSalaryInfo(models.Model):
    salary_code = models.SmallIntegerField(primary_key=True)
    amount = models.IntegerField(blank=True, null=True)
    base_pay = models.IntegerField(blank=True, null=True)
    hourly_pay = models.IntegerField(blank=True, null=True)
    register_time = models.DateTimeField()
    create_emp = models.CharField(max_length=25, blank=True, null=True)
    update_time = models.DateTimeField()
    update_emp = models.CharField(max_length=25, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'm_salary_info'


class MUserInfo(models.Model):
    user_name = models.CharField(max_length=30)
    email_address = models.CharField(primary_key=True, max_length=50)
    password = models.CharField(max_length=20)
    register_time = models.DateTimeField(auto_now_add=True)
    creater = models.CharField(max_length=25, blank=True, null=True)
    update_time = models.DateTimeField(auto_now_add=True)
    updater = models.CharField(max_length=25, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'm_user_info'


class TWorkTime(models.Model):
    user_email_address = models.CharField(primary_key=True, max_length=50)
    work_type = models.SmallIntegerField()
    work_date = models.CharField(max_length=10)
    work_start_time = models.CharField(max_length=5)
    work_end_time = models.CharField(max_length=5)
    register_time = models.DateTimeField(auto_now_add=True)
    create_emp = models.CharField(max_length=25, blank=True, null=True)
    update_time = models.DateTimeField(auto_now_add=True)
    update_emp = models.CharField(max_length=25, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 't_work_time'
        unique_together = (('user_email_address', 'work_date'),)
        