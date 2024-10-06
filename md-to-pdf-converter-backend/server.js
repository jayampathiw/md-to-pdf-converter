const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs').promises;
const MarkdownIt = require('markdown-it');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Default CSS (you can modify this as needed)
const defaultCss = `
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
h1, h2, h3 { color: #2c3e50; }
code { background-color: #f0f0f0; padding: 2px 4px; border-radius: 4px; }
pre { background-color: #f0f0f0; padding: 10px; border-radius: 4px; }
`;

app.use(cors());

app.post('/convert', upload.fields([
  { name: 'mdFile', maxCount: 1 },
  { name: 'cssFile', maxCount: 1 }
]), async (req, res) => {
  try {
    if (!req.files['mdFile']) {
      return res.status(400).send('No Markdown file provided');
    }

    const mdFile = req.files['mdFile'][0];
    const cssFile = req.files['cssFile'] ? req.files['cssFile'][0] : null;

    // Read the Markdown file
    const mdContent = await fs.readFile(mdFile.path, 'utf8');

    // Convert Markdown to HTML
    const md = new MarkdownIt();
    const htmlContent = md.render(mdContent);

    // Read the CSS file if provided, otherwise use default
    let cssContent = cssFile 
      ? await fs.readFile(cssFile.path, 'utf8') 
      : defaultCss;

    // Create a full HTML document
    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>${cssContent}</style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;

    // Send the HTML as a response
    res.contentType('text/html');
    res.send(fullHtml);

  } catch (error) {
    console.error('Error during conversion:', error);
    res.status(500).send(`An error occurred during conversion: ${error.message}`);
  } finally {
    // Clean up
    if (req.files['mdFile']) {
      await fs.unlink(req.files['mdFile'][0].path);
    }
    if (req.files['cssFile']) {
      await fs.unlink(req.files['cssFile'][0].path);
    }
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});