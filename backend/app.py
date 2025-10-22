from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os
import smtplib # The library for sending emails
from email.message import EmailMessage # The library for creating email messages

app = Flask(__name__)
CORS(app)

# The name of the file where messages will be saved.
CSV_FILE = 'messages.csv'

# This is the function that will send the email.
def send_notification_email(name, email, message):
    # It securely gets your email credentials from the "Environment Variables" you will set on Render.
    # It NEVER puts your password directly in the code.
    sender_email = os.getenv('SENDER_EMAIL')
    sender_password = os.getenv('SENDER_PASSWORD') # This must be your 16-digit Google App Password.
    recipient_email = os.getenv('RECIPIENT_EMAIL') # This is the email where you want to receive notifications.

    # If the credentials are not set on Render, it will just skip sending the email.
    if not all([sender_email, sender_password, recipient_email]):
        print("CRITICAL: Email credentials are not set in the environment. Skipping email notification.")
        return

    # Create the email message content and subject.
    msg = EmailMessage()
    msg.set_content(f"""
    You have received a new message from your portfolio website!

    From: {name}
    Email: {email}

    Message:
    {message}
    """)
    msg['Subject'] = f'New Portfolio Message from {name}'
    msg['From'] = sender_email
    msg['To'] = recipient_email

    # This is the standard process for logging into Google's email server and sending the email.
    try:
        # Connect to Gmail's secure SMTP server
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(sender_email, sender_password) # Login using your App Password
            smtp.send_message(msg) # Send the email
            print("Email notification sent successfully.")
    except Exception as e:
        print(f"Error: Failed to send email notification. Details: {e}")


# This is your main API endpoint. It runs when the contact form is submitted.
@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # --- Task 1: Save the message to the CSV file ---
    fieldnames = ['name', 'email', 'message']
    file_exists = os.path.isfile(CSV_FILE)
    try:
        with open(CSV_FILE, 'a', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            if not file_exists:
                writer.writeheader()
            writer.writerow({'name': name, 'email': email, 'message': message})
        print(f"Message from {name} successfully saved to {CSV_FILE}.")
    except Exception as e:
        print(f"Error: Failed to save message to CSV. Details: {e}")

    # --- Task 2: Send the email notification ---
    send_notification_email(name, email, message)

    return jsonify({'message': 'Message received successfully!'}), 200

# This part is just for running the server on your local machine for testing.
if __name__ == '__main__':
    app.run(debug=True, port=5000)