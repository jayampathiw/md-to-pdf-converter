# Markdown to PDF Converter - Front-end

This React application allows users to convert Markdown files to PDF, with optional CSS styling.

## Features

- Upload Markdown (.md) files
- Optional CSS file upload for custom styling
- Convert Markdown to PDF with applied styles
- Client-side PDF generation for reliable output

## Prerequisites

- Node.js (v12 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```
git clone https://your-repository-url.git
cd markdown-to-pdf-converter-frontend
```

2. Install dependencies:
```
npm install
```

## Usage

1. Start the development server:
npm start

2. Open your browser and navigate to `http://localhost:3000`

3. Use the interface to upload a Markdown file and an optional CSS file, then click "Convert to PDF"

## Dependencies

- React
- axios: For making HTTP requests to the backend
- html2pdf.js: For client-side PDF generation

## Configuration

- The backend URL is set to `http://localhost:3001` by default. If your backend is running on a different port or host, update the URL in `src/MarkdownConverter.js`.

## Building for Production

To create a production build:
```
npm run build
```


This will create a `build` directory with optimized production-ready files.

## Troubleshooting

- If you encounter CORS issues, ensure your backend is configured to allow requests from your frontend's origin.
- For PDF generation issues, check the browser console for any errors and ensure all dependencies are correctly installed.