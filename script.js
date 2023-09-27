document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const displayData = document.getElementById('displayData');
    
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        
        // You can perform data validation here if needed
        
        // Display the entered data
        const userData = `
            <h2>Registration Data:</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
        
        displayData.innerHTML = userData;
        
        // Clear the form fields
        registrationForm.reset();
    });
});
