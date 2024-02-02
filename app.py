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

if __name__ == '__main__':
    app.run(debug=True)
