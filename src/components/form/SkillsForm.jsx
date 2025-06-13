import { useEffect, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import "./FormStyles.css";

export default function SkillsForm() {
  const { resumeData, updateSection } = useResume();
  const savedSkills = resumeData.skills || [];

  const [skills, setSkills] = useState(savedSkills);

  const handleChange = (e, index) => {
    const updated = [...skills];
    updated[index] = e.target.value;
    setSkills(updated);
  };

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSave = () => {
    updateSection("skills", skills);
    alert("Skills saved! ✅");
  };

  useEffect(() => {
    setSkills(savedSkills);
  }, [savedSkills]);

  return (
    <div className="form-block">
      <h2 className="form-title">Skills</h2>

      {skills.map((skill, i) => (
        <div key={i} className="form-block">
          <input
            value={skill}
            onChange={(e) => handleChange(e, i)}
            placeholder={`Skill ${i + 1}`}
            className="input-field"
          />
        </div>
      ))}

      <button onClick={addSkill} className="add-btn">+ Add Skill</button>
      <button onClick={handleSave} className="save-btn">💾 Save</button>
    </div>
  );
}
