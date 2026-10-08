let doctors = [
    {
        name: "Dr. Priya",
        department: "ENT",
        startTime: "09:00",
        endTime: "11:00"
    },
    {
        name: "Dr. Rohan",
        department: "Cardiology",
        startTime: "12:00",
        endTime: "14:00"
    },
    {
        name: "Dr. Neena",
        department: "Pediatric",
        startTime: "15:00",
        endTime: "17:00"
    }
];

function displaydoctors() {

    let output = "";

    doctors.forEach(function(doctor, index) {

        output +=
            "<div>" +
            "<h3>" + doctor.name + "</h3>" +
            "<p>Department: " + doctor.department + "</p>" +
            "<p>Time: " + doctor.startTime + " - " + doctor.endTime + "</p>" +

            '<button onclick="bookAppointment(' + index + ')">' +
            "Book Appointment" +
            "</button>" +

            "<hr></div>";
    });

    document.getElementById("listdoctors").innerHTML = output;
}

function patientLogin() {

    let name = document.getElementById("pname").value;
    let age = document.getElementById("p_age").value;
    if (name === "") {
        alert("Please enter patient's name.");
        return;
    }
    if (age === "") {
        alert("Please enter patient's age.");
        return;
    }
    if (age <= 0 || age > 120) {
        alert("Please enter a valid age.");
        return;
    }
    alert("Patient details submitted successfully.");
}

function bookAppointment(index) {

    let patientName = document.getElementById("pname").value;
    let patientAge = document.getElementById("p_age").value;
    let appointmentDate = document.getElementById("appointdate").value;
    let appointmentTime = document.getElementById("appointtime").value;
    let reason = document.getElementById("reason").value;
    if (patientName === "") {
        alert("Please enter patient's name.");
        return;
    }
    if (patientAge === "") {
        alert("Please enter patient's age.");
        return;
    }
    if (patientAge <= 0 || patientAge > 120) {
        alert("Please enter a valid age.");
        return;
    }
    if (appointmentDate === "") {
        alert("Please select an appointment date.");
        return;
    }
    if (appointmentTime === "") {
        alert("Please select an appointment time.");
        return;
    }
    if (reason === "") {
        alert("Please enter the reason for your visit.");
        return;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let selectedDate = new Date(appointmentDate);
    if (selectedDate < today) {
        alert("Please select today or a future date.");
        return;
    }

    let doctor = doctors[index];

    if (appointmentTime < doctor.startTime ||
        appointmentTime > doctor.endTime) {

        alert(doctor.name + " is available only between " + doctor.startTime + " and " + doctor.endTime);
        return;
    }

document.write(
    "Your appointment was successfully booked!<br><br>" +
    "Doctor's Name: " + doctor.name + "<br>" +
    "Doctor's Specialisation: " + doctor.department + "<br>" +
    "Appointment Date: " + appointmentDate + "<br>" +
    "Appointment Time: " + appointmentTime + "<br>" +
    "Patient's Name: " + patientName + "<br>" +
    "Patient's Age: " + patientAge + "<br>" +
    "Reason: " + reason
);
}
displaydoctors();

