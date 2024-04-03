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



function search() {
    const searchType = document.getElementById('searchType').value;
    const searchInput = document.getElementById('searchInput').value;

    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchType, searchInput }),
    })
    .then(response => response.json())
    .then(data => {
        const resultsList = document.getElementById('resultsList');
        resultsList.innerHTML = '';
        data.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            resultsList.appendChild(li);
        });
        document.getElementById('searchResults').classList.remove('hidden');
    });
}



function saveRecipe(recipeName) {
    fetch('/save_recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipeName }),
    })
    .then(response => response.json())
    .then(data => alert(data.message));
}

function saveRestaurant(restaurantName) {
    fetch('/save_restaurant', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ restaurantName }),
    })
    .then(response => response.json())
    .then(data => alert(data.message));
}



function buildRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    fetch('/build_recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipeName, ingredients, instructions }),
    })
    .then(response => response.json())
    .then(data => alert(data.message));
}

HaixinHaixin
