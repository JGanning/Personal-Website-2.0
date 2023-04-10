import React, { useState } from "react";
import ganning_joseph_resume_2023 from "../../assets/img/ganning_joseph_resume_2023.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume col-lg-9 no-padding">
      <h2 className="header no-margin">Resume</h2>
      <div className="download">
        <a
          className="dl-button"
          href={ganning_joseph_resume_2023}
          download="ganning_joseph_resume_2023.pdf"
        >
          <FontAwesomeIcon className="dl-icon" icon={faDownload} />
          Download Resume
        </a>
      </div>

      <div className="doc-body">
        <Document
          file={ganning_joseph_resume_2023}
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
