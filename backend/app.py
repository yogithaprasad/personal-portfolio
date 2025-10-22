from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os
import resend # Import the new library

app = Flask(__name__)
CORS(app)

CSV_FILE = 'messages.csv'

# Set up Resend with your API Key from the environment
resend.api_key = os.getenv("RESEND_API_KEY")
# Get the email you want to send TO from the environment
recipient_email = os.getenv("RECIPIENT_EMAIL")

def send_notification_email(name, email, message):
    if not resend.api_key or not recipient_email:
        print("Resend API Key or Recipient Email not set. Skipping email.")
        return

    try:
        params = {
            "from": "Portfolio Notifier <onboarding@resend.dev>", # This sender is required for the free plan
            "to": [recipient_email],
            "subject": f"New Portfolio Message from {name}",
            "html": f"<strong>You have a new message!</strong><p>From: {name} ({email})</p><p>Message: {message}</p>",
        }
        email_response = resend.Emails.send(params)
        print(f"Email sent successfully: {email_response}")
    except Exception as e:
        print(f"Error sending email with Resend: {e}")


@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Save to CSV (no changes here)
    fieldnames = ['name', 'email', 'message']
    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()
        writer.writerow({'name': name, 'email': email, 'message': message})

    # Send email using Resend
    send_notification_email(name, email, message)

    return jsonify({'message': 'Message received successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)