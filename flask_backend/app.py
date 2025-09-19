from flask import Flask, request, jsonify, session
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'supersecretkey'
CORS(app, supports_credentials=True)

users = {}

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    if email in users:
        return jsonify({'error': 'Email already exists'}), 400
    users[email] = {
        'name': name,
        'password': generate_password_hash(password)
    }
    return jsonify({'message': 'Signup successful'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = users.get(email)
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'error': 'Invalid credentials'}), 401
    session['user'] = email
    return jsonify({'message': 'Login successful', 'name': user['name']})

@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'message': 'Logged out'})

@app.route('/api/me', methods=['GET'])
def me():
    email = session.get('user')
    if not email or email not in users:
        return jsonify({'error': 'Not logged in'}), 401
    user = users[email]
    return jsonify({'name': user['name'], 'email': email})

@app.route('/api/dashboard', methods=['GET'])
def dashboard():
    email = session.get('user')
    if not email or email not in users:
        return jsonify({'error': 'Not logged in'}), 401
    # Example dashboard data
    return jsonify({
        'welcome': f'Welcome {users[email]["name"]}',
        'tools': ['Ask Anything', 'Summarize Text', 'Quiz', 'Flashcards', 'Planner', 'Progress Tracker']
    })

if __name__ == '__main__':
    app.run(debug=True)
