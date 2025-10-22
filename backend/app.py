from flask import Flask, request, jsonify
from flask_cors import CORS
import csv # We need to import the csv library
import os # We'll use this to check if the file exists

app = Flask(__name__)
CORS(app)

# Define the name of our CSV file
CSV_FILE = 'messages.csv'

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # --- This is the new part that saves the data ---

    # 1. Define the header for our CSV file
    fieldnames = ['name', 'email', 'message']

    # 2. Check if the file exists already to avoid writing the header every time
    file_exists = os.path.isfile(CSV_FILE)

    # 3. Open the file in 'append' mode (a) so we add a new line each time
    with open(CSV_FILE, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        # 4. If the file is new, write the header row
        if not file_exists:
            writer.writeheader()
        
        # 5. Write the actual message data as a new row
        writer.writerow({'name': name, 'email': email, 'message': message})

    # --- End of the new part ---

    print(f"Received and saved message from {name}")

    return jsonify({'message': 'Message received and saved successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)