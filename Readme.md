## Markdown to PDF Converter - Root Project

**Overview**

This repository contains the frontend and backend components of a Markdown to PDF converter application. The frontend is built using React and handles user interaction, while the backend is a Node.js server that provides the API for converting Markdown files to PDF.

**Project Structure**

```
markdown-to-pdf-converter
├── md-to-pdf-converter-frontend
│   ├── ... (frontend project files)
└── md-to-pdf-converter-backend
    ├── ... (backend project files)
```

**Installation**

1. Clone the repository:
   ```bash
   git clone https://your-repository-url.git
   ```

2. Navigate to the root directory:
   ```bash
   cd markdown-to-pdf-converter
   ```

**Running the Application**

1. **Start the backend server:**
   ```bash
   cd md-to-pdf-converter-backend
   npm install
   node server.js
   ```

2. **Start the frontend development server:**
   ```bash
   cd md-to-pdf-converter-frontend
   npm install
   npm start
   ```

**Usage**

Open your browser and navigate to `http://localhost:3000`. You can now upload Markdown files and optionally apply custom CSS styling to convert them to PDF.

**Dependencies**

- **Frontend:** React, axios, html2pdf.js
- **Backend:** Express, Multer, Cors, Markdown-it

**Configuration**

- **Frontend:** The backend URL is set to `http://localhost:3001` by default. Update it in `src/MarkdownConverter.js` if necessary.
- **Backend:** The server runs on port 3001 by default. Modify the `PORT` constant in `server.js` to change this.

**Additional Notes**

- For more detailed information and troubleshooting tips, refer to the individual README files for the frontend and backend projects.
- Ensure that both the frontend and backend are running on the same machine or network for proper communication.
- Consider implementing security measures, such as authentication and input validation, especially in production environments.
