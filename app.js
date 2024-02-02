// app.js
function createProfile() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const allergies = document.getElementById('allergies').value;

    // Assuming a simple POST request to the server
    fetch('/create_profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, allergies }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the user profile result
        document.getElementById('profileName').textContent = data.name;
        document.getElementById('profileAge').textContent = data.age;
        document.getElementById('profileAllergies').textContent = data.allergies.join(', ');

        // Show the profile result section
        document.getElementById('profileResult').classList.remove('hidden');
    });
}
HaixinHaixin