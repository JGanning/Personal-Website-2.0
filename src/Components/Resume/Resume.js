import React, { Component, useState } from "react";
import josephganning_resume from "../../assets/img/josephganning_resume.pdf";
import "./Resume.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume col-lg-9 no-padding">
      <h2 className="resume-header no-margin">Resume</h2>
      <div className="download">
        <a href="../../assets/img/josephganning_resume.pdf" download>
          Download Resume
        </a>
      </div>

      <div className="doc-body">
        <Document
          file={josephganning_resume}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          className="resume-pdf"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
