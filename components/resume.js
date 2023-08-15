import React, { useState, memo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const pdfUrl = "/Ansuman.pdf";
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="p-4 flex-1 ">
      <div className="p-4 border-2 border-gray-800 border-dashed rounded-lg dark:border-gray-700">
        <div className="pdf-viewer">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <div className="pdf-page">
              <Page key={`page_${currentPage}`} pageNumber={currentPage} />
            </div>
          </Document>
        
          <div className=" max-w-lg my-4 container flex justify-center mx-auto">
            <div className="flex flex-row mx-auto pagination">
              <button
                type="button"
                className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-700 hover:text-white px-3"
                onClick={goToPreviousPage} disabled={currentPage === 1}
              >
                <div className="flex flex-row align-middle">
                  <svg
                    className="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-2 m-0">Prev</p>
                </div>
              </button>
              <button
                type="button"
                className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-gray-700 hover:text-white px-3"
                onClick={goToNextPage} disabled={currentPage === numPages}
              >
                <div className="flex flex-row align-middle">
                  <span className="mr-2 m-0">Next</span>
                  <svg
                    className="w-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Resume);
