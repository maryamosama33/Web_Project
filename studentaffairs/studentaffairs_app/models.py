from django.db import models
from django.shortcuts import render
# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=8, primary_key=True)
    level = models.CharField(max_length=10)
    department = models.CharField(max_length=100)
    gpa = models.FloatField()
    email = models.EmailField()
    phone = models.CharField(max_length=11)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10)
    status = models.CharField(max_length=10)
    def __str__(self):
        return self.name
