if (localStorage.length == 0){
let student1 = {
    name : "Shahd Mostafa",
    ID : "20211054",
    Departement : "CS",
    level : "Level 3",
    GPA : "3.5",
    Email : "shahd@gmail.com",
    Phone : "01111456252",
    Address : "Al-haram",
    BirthDate : "27/11/2003",
    Status : "Active"
};

let student2 = {
    name : "Noureen Saad",
    ID : "202110555",
    Departement : "IT",
    level : "Level 3",
    GPA : "3.8",
    Email : "Noureen@gmail.com",
    Phone : "01111456252",
    Address : "El-Maadi",
    BirthDate : "27/11/2004",
    Status : "Active"
};
    localStorage.setItem('ArrayOfStudents', JSON.stringify([student1 , student2]));
}