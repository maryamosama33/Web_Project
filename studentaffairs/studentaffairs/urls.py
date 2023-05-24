from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('studentaffairs_app.urls')),
    path('add_student/', include('studentaffairs_app.urls')),
    path('home/', include('studentaffairs_app.urls')),
    path('add/', include('studentaffairs_app.urls')),
    path('edit/', include('studentaffairs_app.urls')),
    path('information/', include('studentaffairs_app.urls')),
    path('help/', include('studentaffairs_app.urls')),
    path('Search/', include('studentaffairs_app.urls')),
    path('StuDepartment/', include('studentaffairs_app.urls')),
    path('get-students/', include('studentaffairs_app.urls')),
    path('update_student/', include('studentaffairs_app.urls')),
    path('delete_student/', include('studentaffairs_app.urls')),
    path('update_department/', include('studentaffairs_app.urls')),
    path('search_students/', include('studentaffairs_app.urls')),
]

