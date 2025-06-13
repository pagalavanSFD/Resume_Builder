import { useResume } from "../../context/ResumeContext";
import { useState, useEffect } from "react";
import "./FormStyles.css";

export default function ExperienceForm() {
  const { resumeData, updateSection } = useResume();
  const [localExperience, setLocalExperience] = useState([]);

  useEffect(() => {
    setLocalExperience(resumeData.experience || []);
  }, [resumeData.experience]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updated = [...localExperience];
    updated[index][name] = value;
    setLocalExperience(updated);
  };

  const addExperience = () => {
    setLocalExperience([
      ...localExperience,
      { jobTitle: "", company: "", duration: "", description: "" },
    ]);
  };

  const handleSave = () => {
    updateSection("experience", localExperience);
    alert("Experience details saved! ✅");
  };

  return (
    <div className="form-block">
      <h2 className="form-title">Experience</h2>

      {localExperience.map((exp, i) => (
        <div key={i} className="form-block">
          <input
            name="jobTitle"
            value={exp.jobTitle}
            onChange={(e) => handleChange(e, i)}
            placeholder="Job Title"
            className="input-field"
          />
          <input
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(e, i)}
            placeholder="Company"
            className="input-field"
          />
          <input
            name="duration"
            value={exp.duration}
            onChange={(e) => handleChange(e, i)}
            placeholder="Duration"
            className="input-field"
          />
          <textarea
            name="description"
            value={exp.description}
            onChange={(e) => handleChange(e, i)}
            placeholder="Description"
            className="input-field"
          />
        </div>
      ))}

      <button onClick={addExperience} className="add-btn">+ Add More</button>
      <button onClick={handleSave} className="save-btn">💾 Save</button>
    </div>
  );
}
