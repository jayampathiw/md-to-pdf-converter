import React, { useState } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

function MarkdownConverter() {
  const [mdFile, setMdFile] = useState(null);
  const [cssFile, setCssFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMdFileChange = (e) => {
    setMdFile(e.target.files[0]);
  };

  const handleCssFileChange = (e) => {
    setCssFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("mdFile", mdFile);
    if (cssFile) {
      formData.append("cssFile", cssFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/convert",
        formData,
        {
          responseType: "text",
        }
      );

      // Create a temporary div to hold the HTML content
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = response.data;

      // Use html2pdf to convert HTML to PDF
      const opt = {
        margin: 10,
        filename: "converted.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(tempDiv).set(opt).save();
    } catch (err) {
      setError("An error occurred during conversion. Please try again.");
      console.error("Conversion error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="markdown-converter">
      <h1>Markdown to PDF Converter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mdFile">Markdown File:</label>
          <input
            type="file"
            id="mdFile"
            accept=".md"
            onChange={handleMdFileChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cssFile">CSS File (optional):</label>
          <input
            type="file"
            id="cssFile"
            accept=".css"
            onChange={handleCssFileChange}
          />
        </div>
        <button type="submit" disabled={isLoading || !mdFile}>
          {isLoading ? "Converting..." : "Convert to PDF"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default MarkdownConverter;
