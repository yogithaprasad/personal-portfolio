# Yogitha Prasad - Full-Stack Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-cyan?style=for-the-badge)](https://yogithaprasad.vercel.app)

<!-- IMPORTANT: After you paste this, you must take a screenshot of your live website, save it as "screenshot.png" in your main project folder, and push it to GitHub for the image below to appear. -->
![Portfolio Screenshot](./screenshot.png)

This is the official repository for my personal portfolio website. It is a full-stack application built with a modern tech stack to showcase my skills, projects, and experience in AI/ML and web development. The website is fully responsive and features a functional contact form with real-time email notifications.

---

## ✨ Features

- **Modern, Responsive Design:** A clean, professional layout that looks great on all devices, from mobile phones to desktops.
- **Dynamic Sections:** Includes detailed sections for "About Me", "Core Competencies", and "Projects".
- **Full-Stack Contact Form:** A fully functional contact form that allows visitors to get in touch.
- **Python Backend API:** A backend built with Flask that receives form submissions.
- **Data Persistence:** The backend saves all incoming messages to a `.csv` file on the server for record-keeping.
- **Instant Email Notifications:** Utilizes the Resend API to send an instant email notification to my personal inbox upon every new message submission.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js / React
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

### Backend
- **Framework:** Python / Flask
- **Server:** Gunicorn
- **API Communication:** Flask-CORS
- **Email Service:** Resend API
- **Deployment:** Render

---

## 🚀 Running This Project Locally

To run this project on your own machine, follow these steps.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or later)
- [Python](https://www.python.org/downloads/) (v3.8 or later)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yogithaprasad/personal-portfolio.git
cd personal-portfolio

# Navigate into the frontend directory
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev

# Open a new, separate terminal and navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use: .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py

---

### **Final Step: Upload to GitHub**

After you have pasted the text into `README.md` and added your `screenshot.png` to the main folder, run these commands in your terminal to upload everything:

```bash
git add .
git commit -m "Docs: Finalize professional README with live link and instructions"
git push
