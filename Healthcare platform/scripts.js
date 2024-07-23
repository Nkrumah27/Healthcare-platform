document.addEventListener('DOMContentLoaded', () => {
    // Handle patient registration
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        alert(`Patient Registered: ${name}, ${email}, ${phone}, ${dob}`);
        registrationForm.reset();
    });

    // Handle appointment scheduling
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const patientName = document.getElementById('patient-name').value;
        const appointmentDate = document.getElementById('appointment-date').value;
        const appointmentTime = document.getElementById('appointment-time').value;
        const record = document.createElement('li');
        record.textContent = `Appointment for ${patientName} on ${appointmentDate} at ${appointmentTime}`;
        document.getElementById('records-list').appendChild(record);
        alert(`Appointment Scheduled: ${patientName}, ${appointmentDate}, ${appointmentTime}`);
        appointmentForm.reset();
    });

    // SMS Notification logic (dummy)
    function sendSMSNotification(phone, message) {
        // This function would integrate with an SMS API in a real-world scenario.
        console.log(`Sending SMS to ${phone}: ${message}`);
    }
});
