# Markdown to PDF Converter - Back-end

This Node.js server provides an API endpoint for converting Markdown files to HTML, with optional CSS styling.

## Features

- Convert Markdown to HTML
- Apply custom CSS styling
- Handle file uploads (Markdown and CSS)

## Prerequisites

- Node.js (v12 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```
git clone https://your-repository-url.git
cd markdown-to-pdf-converter-backend
```

2. Install dependencies:
```
npm install
```

## Usage

1. Start the server:
```
node server.js
```

2. The server will start running on `http://localhost:3001`

## API Endpoints

### POST /convert

Converts a Markdown file to HTML with optional CSS styling.

- **Input:**
- `mdFile`: Markdown file (required)
- `cssFile`: CSS file (optional)

- **Output:** HTML content

## Dependencies

- Express: Web server framework
- Multer: Handling multipart/form-data for file uploads
- Cors: Enabling CORS
- Markdown-it: Markdown to HTML conversion

## Configuration

- The server runs on port 3001 by default. To change this, modify the `PORT` constant in `server.js`.
- CORS is enabled for all origins. For production, you should configure this to allow only your frontend's origin.

## Customization

- To modify the default CSS styles, edit the `defaultCss` variable in `server.js`.

## Troubleshooting

- If files aren't being received properly, check the `uploads/` directory permissions.
- For any conversion errors, check the server logs for detailed error messages.

## Security Notes

- This server doesn't include authentication. In a production environment, implement appropriate security measures.
- Ensure to handle file uploads securely and implement proper input validation.