import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import Grid from '@mui/material/Grid';

//import src from 'pdfjs-dist/build/pdf.worker.js';
import { useAsync } from 'react-use';
import styled from '@emotion/styled';
import './PDFViewer.css';
pdfjs.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js';

const PDFViewer = ({ value }) => {
  const [numPages, setNumPages] = useState(null);

  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    pdf(value)
      .toBlob()
      .then((blob) => {
        setPdfUrl(URL.createObjectURL(blob));
      });
  }, [value]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grid
      container
      spacing={3}
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ marginTop: '24px' }}
    >
      <Grid item xs={12}>
        <div className='container'>
          <Document
            className={'PDFDocument'}
            file={pdfUrl}
            onLoadError={(error) =>
              alert('Error while loading document! ' + error.message)
            }
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderInteractiveForms={false}
                renderAnnotationLayer={false}
                className={'PDFPage'}
              />
            ))}
          </Document>
        </div>
      </Grid>
    </Grid>
  );
};

export default PDFViewer;
