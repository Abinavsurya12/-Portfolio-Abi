# Contact Form Backend Setup

This project provides a backend for a contact form using Node.js, Express, and Nodemailer with Gmail SMTP.

## Prerequisites
- Node.js installed on your system.
- A Gmail account with an **App Password** generated.

## Project Structure
- `index.js`: The Express server and email logic.
- `.env`: Environment variables for credentials (Do not share this file publicly).
- `index.html`: A simple frontend to test the form.
- `package.json`: Project dependencies.

## Setup Instructions

1.  **Open a terminal and navigate to the project directory:**
    ```bash
    cd c:\Users\HP\Documents\portfolio\contact-backend
    ```

2.  **Install dependencies:** (If you haven't already)
    ```bash
    npm install
    ```

3.  **Run the Server:**
    ```bash
    node index.js
    ```
    Confirm you see: `Server is running on port 5000`.

5.  **Test the Form:**
    - Open `index.html` in your browser.
    - Fill out the Name, Email, and Message fields.
    - Click **Send Message**.
    - If successful, you will receive an email at `abinavsuryapm@gmail.com`.

## Security Notes
- **App Password:** Never use your regular Gmail password. Generate an App Password in your Google Account Security settings.
- **.gitignore:** Always add `.env` to your `.gitignore` file to prevent leaking credentials to GitHub.
