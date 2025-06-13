// import { useRef } from "react";
// import html2pdf from "html2pdf.js";
// import ResumePreview from "./ResumePreview";
// import { useResume } from "../context/ResumeContext";

// export default function ExportPDF() {
//   const { resumeData } = useResume();
//   const printRef = useRef();

//   const handleDownloadPDF = () => {
//     if (!printRef.current) return;

//     const opt = {
//       margin: 0.5,
//       filename: "My_Resume.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
//     };

//     html2pdf().set(opt).from(printRef.current).save();
//   };

//   return (
//     <div className="form-block">
//       <h2 className="form-title">📄 Export as PDF</h2>
//       <p>Click to generate a printable, clean PDF version of your resume.</p>

//       <button onClick={handleDownloadPDF} className="save-btn">🖨️ Print/Save PDF</button>

//       {/* This section is hidden from the UI, but used for PDF rendering */}
//       <div style={{ display: "none" }}>
//         <div ref={printRef}>
//           <ResumePreview data={resumeData} />
//         </div>
//       </div>
//     </div>
//   );
// }


import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumePreview from "./ResumePreview";
import ResumeTemplateModern from "./templates/ResumeTemplateModern";
import { useResume } from "../context/ResumeContext";

export default function ExportPDF() {
  const { resumeData, selectedTemplate } = useResume();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "My_Resume",
  });

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ResumeTemplateModern ref={componentRef} data={resumeData} />;
      default:
        return <ResumePreview ref={componentRef} data={resumeData} />;
    }
  };

  return (
    <div className="form-block">
      <h2 className="form-title">📄 Export as PDF</h2>
      <p>Click below to generate a printable version of your resume.</p>
      <button onClick={handlePrint} className="save-btn">🖨️ Print/Save PDF</button>

      <div style={{ display: "none" }}>
        {renderTemplate()}
      </div>
    </div>
  );
}
