import { useResume } from "../../context/ResumeContext";
import { useState, useEffect } from "react";
import "./FormStyles.css";

export default function EducationForm() {
  const { resumeData, updateSection } = useResume();
  const [localEducation, setLocalEducation] = useState([]);

  useEffect(() => {
    setLocalEducation(resumeData.education || []);
  }, [resumeData.education]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updated = [...localEducation];
    updated[index][name] = value;
    setLocalEducation(updated);
  };

  const addEducation = () => {
    setLocalEducation([
      ...localEducation,
      { degree: "", institution: "", year: "" },
    ]);
  };

  const handleSave = () => {
    updateSection("education", localEducation);
    alert("Education details saved! ✅");
  };

  return (
    <div className="form-block">
      <h2 className="form-title">Education</h2>

      {localEducation.map((edu, i) => (
        <div key={i} className="form-block">
          <input
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(e, i)}
            placeholder="Degree"
            className="input-field"
          />
          <input
            name="institution"
            value={edu.institution}
            onChange={(e) => handleChange(e, i)}
            placeholder="School / University"
            className="input-field"
          />
          <input
            name="year"
            value={edu.year}
            onChange={(e) => handleChange(e, i)}
            placeholder="Year"
            className="input-field"
          />
        </div>
      ))}

      <button onClick={addEducation} className="add-btn">+ Add More</button>
      <button onClick={handleSave} className="save-btn">💾 Save</button>
    </div>
  );
}
