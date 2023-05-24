from django.shortcuts import render, redirect
from studentaffairs_app.models import Student
from django.http import JsonResponse
import json
from django.db.models import Q


def index(request):
    return render(request, 'index.html')
def home(request):
    return render(request, "Home.html")
def add(request):
    return render(request, "Add.html")
def Edit(request):
    return render(request, "Edit.html")
def Information(request):
    return render(request, "Information.html")
def Help(request):
    return render(request, "Help.html")
def Search(request):
    return render(request, "Search.html")
def StuDepartment(request):
    return render(request, "StuDepartment.html")


def add_student(request):
    if(request.POST):
        data = request.POST.dict()
        Name = data['student_name']
        ID = data['student_id']
        LEVEL = data['student_level']
        DEPT = data['student_dept']
        GPA = data['student_gpa']
        EMAIL = data['student_email']
        PHone = data['student_phone']
        DATE = data['student_birthdate']
        Statues = data['student_status']
        GEnder = data['student_gender']       
        student = Student(
            name=Name,
            student_id=ID,
            level=LEVEL,
            department=DEPT,
            gpa=GPA,
            email=EMAIL,
            phone=PHone,
            date_of_birth=DATE,
            gender=GEnder,
            status=Statues,
        )
        if Student.objects.filter(student_id=ID).exists():
            return JsonResponse({'message': 'Student already exists'})
        student.save()
        return JsonResponse({'message': 'Student added successfully'})
    return JsonResponse({'message': 'Invalid request'})

def get_students(request):
    # Retrieve all student objects from the database
    students = Student.objects.all()
    # Convert the student objects to a list of dictionaries
    student_list = []
    for student in students:
        student_dict = {
            'name': student.name,
            'student_id': student.student_id,
            'level': student.level,
            'department': student.department,
            'gpa': student.gpa,
            'email': student.email,
            'phone': student.phone,
            'date_of_birth': student.date_of_birth,
            'gender': student.gender,
            'status': student.status,
        }
        student_list.append(student_dict)

    # Return the student list as a JSON response
    return JsonResponse(student_list, safe=False)

def update_student(request):
    # Retrieve the JSON data from the request body
    data = request.POST.dict()
    print(data)
    # Retrieve the student object to be updated from the database using the student id
    student = Student.objects.get(student_id=data['studID'])

    # Update the student object with the new data
    student.name = data['name']
    student.email = data['email']
    student.phone = data['phone']
    student.gpa = data['gpa']
    student.date_of_birth = data['dob']
    student.level = data['level']
    student.status = data['status']
    student.gender = data['gender']
    
    print(student.name)
    # Save the updated student object to the database
    student.save()

    # Return a JSON response indicating that the update was successful
    response_data = {'message': 'Student updated successfully'}
    return JsonResponse(response_data)

def delete_student(request):
    if request.method == 'POST':
        try:
            data = request.POST.dict()
            student = Student.objects.get(student_id=data['studID'])     
            student.delete()
            return JsonResponse({'message': 'Student deleted successfully'})
        except Student.DoesNotExist:
            return JsonResponse({'message': 'Student does not exist'})
    else:
        return redirect('/information')
    
def update_department(request):
    
    data = request.POST.dict()
    
    student = Student.objects.get(student_id=data['ID'])

    student.department = data['Department']
    
    student.save()
    
    response_data = {'message': 'Department updated successfully'}
    return JsonResponse(response_data)

def search_students(request):
    if request.method == 'GET':
        search_param = request.GET.get('search_param', '')

        students = Student.objects.filter(Q(name__icontains=search_param) | Q(department__icontains=search_param))
        student_list = []
        for student in students:
            student_dict = {
                'name': student.name,
                'student_id': student.student_id,
                'level': student.level,
                'department': student.department,
                'gpa': student.gpa,
                'email': student.email,
                'phone': student.phone,
                'date_of_birth': student.date_of_birth,
                'gender': student.gender,
                'status': student.status,
            }
            student_list.append(student_dict)

        return JsonResponse(student_list, safe=False)

    return JsonResponse({'message': 'Invalid request'})
