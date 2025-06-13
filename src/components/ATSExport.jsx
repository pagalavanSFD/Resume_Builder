
import { useResume } from "../context/ResumeContext";


export default function ATSExport() {
  const { resumeData } = useResume();

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume_data.json";
    link.click();
  };

  const downloadText = () => {
    let plainText = "";
    Object.entries(resumeData).forEach(([section, data]) => {
      plainText += `\n\n=== ${section.toUpperCase()} ===\n`;
      if (Array.isArray(data)) {
        data.forEach((item, index) => {
          if (typeof item === "string") {
            plainText += `• ${item}\n`;
          } else {
            Object.entries(item).forEach(([key, value]) => {
              plainText += `${key}: ${value}\n`;
            });
            if (index < data.length - 1) plainText += "---\n";
          }
        });
      } else if (typeof data === "string") {
        plainText += data;
      }
    });

    const blob = new Blob([plainText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume_plaintext.txt";
    link.click();
  };

  return (
    <div className="form-block">
      <h2 className="form-title">ATS Ready Export</h2>
      <p>Export your resume in recruiter-friendly formats.</p>
      <button onClick={downloadJSON} className="save-btn">⬇️ Export JSON</button>
      <button onClick={downloadText} className="save-btn">⬇️ Export Plain Text</button>
    </div>
  );
}
