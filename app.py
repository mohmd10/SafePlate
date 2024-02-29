# app.py
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create_profile', methods=['POST'])
def create_profile():
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')
    allergies = data.get('allergies')

    # Process the data as needed (store in a database, etc.)

    # Return the user profile as JSON
    return jsonify({'name': name, 'age': age, 'allergies': allergies})


    # Food Search Function route
    @app.route('/search', methods=['POST'])
    def search():
        data = request.get_json()
        search_type = data.get('searchType')
        search_input = data.get('searchInput')

        # Implement search logic based on the search type
        # For simplicity, let's just return a list of dummy results
        results = []
        if search_type == 'allergies':
            results = ['Allergy-friendly meal 1', 'Allergy-friendly meal 2']
        elif search_type == 'recipes':
            results = ['Recipe 1', 'Recipe 2']
        elif search_type == 'restaurants':
            results = ['Restaurant 1', 'Restaurant 2']
        elif search_type == 'price':
            results = ['Affordable meal 1', 'Affordable meal 2']

        return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)
