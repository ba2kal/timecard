# Generated by Django 3.0.2 on 2020-03-07 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MCodeInfo',
            fields=[
                ('code_id', models.SmallIntegerField(primary_key=True, serialize=False)),
                ('code_name', models.CharField(max_length=25)),
                ('code_value', models.CharField(max_length=50)),
                ('register_time', models.DateTimeField()),
                ('create_emp', models.CharField(blank=True, max_length=25, null=True)),
                ('update_time', models.DateTimeField()),
                ('update_emp', models.CharField(blank=True, max_length=25, null=True)),
            ],
            options={
                'db_table': 'm_code_info',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='MDeptInfo',
            fields=[
                ('dept_id', models.CharField(max_length=5, primary_key=True, serialize=False)),
                ('dept_name', models.CharField(max_length=15)),
                ('dept_comment', models.CharField(blank=True, max_length=100, null=True)),
                ('dept_total_emp', models.SmallIntegerField(blank=True, null=True)),
                ('register_time', models.DateTimeField()),
                ('create_emp', models.CharField(blank=True, max_length=25, null=True)),
                ('update_time', models.DateTimeField()),
                ('update_emp', models.CharField(blank=True, max_length=25, null=True)),
            ],
            options={
                'db_table': 'm_dept_info',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='MEmpInfo',
            fields=[
                ('emp_number', models.SmallIntegerField(primary_key=True, serialize=False)),
                ('emp_first_name', models.CharField(max_length=10)),
                ('emp_given_name', models.CharField(max_length=15)),
                ('emp_age', models.SmallIntegerField()),
                ('emp_sex', models.SmallIntegerField()),
                ('emp_birthday', models.DateField()),
                ('emp_dept_id', models.CharField(blank=True, max_length=5, null=True)),
                ('emp_position_code', models.SmallIntegerField(blank=True, null=True)),
                ('emp_engineer_level', models.SmallIntegerField(blank=True, null=True)),
                ('emp_tel', models.CharField(blank=True, max_length=13, null=True)),
                ('emp_postal_code', models.CharField(blank=True, max_length=8, null=True)),
                ('emp_addres', models.CharField(blank=True, max_length=10, null=True)),
                ('emp_join_date', models.DateField(blank=True, null=True)),
                ('emp_promotion_date', models.DateField(blank=True, null=True)),
                ('emp_salary_code', models.SmallIntegerField(blank=True, null=True)),
                ('register_time', models.DateTimeField()),
                ('create_emp', models.CharField(blank=True, max_length=25, null=True)),
                ('update_time', models.DateTimeField()),
                ('update_emp', models.CharField(blank=True, max_length=25, null=True)),
            ],
            options={
                'db_table': 'm_emp_info',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='MSalaryInfo',
            fields=[
                ('salary_code', models.SmallIntegerField(primary_key=True, serialize=False)),
                ('amount', models.IntegerField(blank=True, null=True)),
                ('base_pay', models.IntegerField(blank=True, null=True)),
                ('hourly_pay', models.IntegerField(blank=True, null=True)),
                ('register_time', models.DateTimeField()),
                ('create_emp', models.CharField(blank=True, max_length=25, null=True)),
                ('update_time', models.DateTimeField()),
                ('update_emp', models.CharField(blank=True, max_length=25, null=True)),
            ],
            options={
                'db_table': 'm_salary_info',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='MUserInfo',
            fields=[
                ('user_name', models.CharField(max_length=30)),
                ('email_address', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=20)),
                ('register_time', models.DateTimeField()),
                ('creater', models.CharField(blank=True, max_length=25, null=True)),
                ('update_time', models.DateTimeField()),
                ('updater', models.CharField(blank=True, max_length=25, null=True)),
            ],
            options={
                'db_table': 'm_user_info',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TestreactTestTbl',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=20)),
                ('name', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'testReact_test_tbl',
                'managed': False,
            },
        ),
    ]
