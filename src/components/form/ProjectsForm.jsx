import { useEffect, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import "./FormStyles.css";

export default function ProjectsForm() {
  const { resumeData, updateSection } = useResume();
  const savedProjects = resumeData.projects || [];

  const [projects, setProjects] = useState(savedProjects);

  const handleChange = (e, index) => {
    const updated = [...projects];
    updated[index][e.target.name] = e.target.value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { name: "", link: "", description: "" },
    ]);
  };

  const handleSave = () => {
    updateSection("projects", projects);
  };

  useEffect(() => {
    setProjects(savedProjects);
  }, [savedProjects]);

  return (
    <div className="form-block">
      <h2 className="form-title">Projects</h2>

      {projects.map((proj, i) => (
        <div key={i} className="form-block">
          <input
            name="name"
            value={proj.name}
            onChange={(e) => handleChange(e, i)}
            placeholder="Project Name"
            className="input-field"
          />
          <input
            name="link"
            value={proj.link}
            onChange={(e) => handleChange(e, i)}
            placeholder="Project Link (optional)"
            className="input-field"
          />
          <textarea
            name="description"
            value={proj.description}
            onChange={(e) => handleChange(e, i)}
            placeholder="Project Description"
            className="input-field"
          />
        </div>
      ))}

      <button onClick={addProject} className="add-btn">+ Add More</button>
      <button onClick={handleSave} className="save-btn">💾 Save</button>
    </div>
  );
}
