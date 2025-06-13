
// import { useResume } from "../context/ResumeContext";
// import ResumePreview from "./ResumePreview";
// import "./ResumePreview.css";

// export default function FinalReview() {
//   const { resumeData } = useResume();

//   return (
//     <div className="form-block">
//       <h2 className="form-title">📝 Final Resume Review</h2>
//       <p>Below is exactly how your resume will look in the exported PDF.</p>

//       <div style={{ border: "1px solid #ccc", padding: "1rem", background: "#fff" }}>
//         <ResumePreview data={resumeData} />
//       </div>

//       <div style={{ marginTop: "1rem", textAlign: "center" }}>
//         <p>✅ Looks good? Proceed to export.</p>
//       </div>
//     </div>
//   );
// }
// FinalReview.jsx
import { useResume } from "../context/ResumeContext";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
import ResumePreview from "../components/ResumePreview";
import "./TemplateSelector.css";

export default function FinalReview() {
  const { resumeData, selectedTemplate, setSelectedTemplate } = useResume();
  const printRef = useRef();

  const handleDownload = () => {
    if (!printRef.current) return;

    html2pdf()
      .set({
        margin: 0,
        filename: `resume-${selectedTemplate}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(printRef.current)
      .save();
  };

  return (
    <div className="form-block">
      <h2 className="form-title">📝 Final Resume Review</h2>

      {/* Template Selection */}
      <div className="template-options">
        {["default", "modern", "elegant"].map((template) => (
          <button
            key={template}
            className={`template-btn ${
              selectedTemplate === template ? "active" : ""
            }`}
            onClick={() => setSelectedTemplate(template)}
          >
            {template.charAt(0).toUpperCase() + template.slice(1)}
          </button>
        ))}
      </div>

      {/* Resume Preview Area */}
      <div className="resume-preview-container" style={{ marginTop: "2rem" }}>
        <ResumePreview ref={printRef} data={resumeData} />
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button onClick={handleDownload}>📄 Download PDF</button>
      </div>
    </div>
  );
}
