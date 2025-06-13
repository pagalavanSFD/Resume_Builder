import { useEffect, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import "./FormStyles.css";

export default function CertificationsForm() {
  const { resumeData, updateSection } = useResume();
  const savedCerts = resumeData.certifications || [];

  const [certs, setCerts] = useState(savedCerts);

  const handleChange = (e, index) => {
    const updated = [...certs];
    updated[index] = e.target.value;
    setCerts(updated);
  };

  const addCert = () => {
    setCerts([...certs, ""]);
  };

  const handleSave = () => {
    updateSection("certifications", certs);
    alert("Certifications saved! ✅");
  };

  useEffect(() => {
    setCerts(savedCerts);
  }, [savedCerts]);

  return (
    <div className="form-block">
      <h2 className="form-title">Certifications</h2>

      {certs.map((cert, i) => (
        <div key={i} className="form-block">
          <input
            value={cert}
            onChange={(e) => handleChange(e, i)}
            placeholder={`Certification ${i + 1}`}
            className="input-field"
          />
        </div>
      ))}

      <button onClick={addCert} className="add-btn">+ Add Certification</button>
      <button onClick={handleSave} className="save-btn">💾 Save</button>
    </div>
  );
}
