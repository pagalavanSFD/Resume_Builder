// LivePreview.jsx
import { useResume } from "../context/ResumeContext";
import "./LivePreview.css";

export default function LivePreview() {
  const { resumeData } = useResume();

  return (
    <div className="live-preview">
      <h2>Live Resume Preview</h2>

      <div className="preview-block">
        <h3>{resumeData.personal?.fullName || "Your Name"}</h3>
        <p>{resumeData.personal?.email || "your.email@example.com"}</p>
        <p>{resumeData.personal?.phone || "Phone Number"}</p>
        <p><strong>Location:</strong> {resumeData.personal?.location}</p>
      </div>

      {resumeData.summary && (
        <div className="preview-block">
          <h4>Summary</h4>
          <p>{resumeData.summary}</p>
        </div>
      )}

      {resumeData.education?.length > 0 && (
        <div className="preview-block">
          <h4>Education</h4>
          {resumeData.education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.degree} at {edu.institution}</strong>
              <p>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.experience?.length > 0 && (
        <div className="preview-block">
          <h4>Experience</h4>
          {resumeData.experience.map((exp, i) => (
            <div key={i}>
              <strong>{exp.title} at {exp.company}</strong>
              <p>{exp.startDate} - {exp.endDate}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.projects?.length > 0 && (
        <div className="preview-block">
          <h4>Projects</h4>
          {resumeData.projects.map((proj, i) => (
            <div key={i}>
              <strong>{proj.name}</strong>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      )}

      {resumeData.skills?.length > 0 && (
        <div className="preview-block">
          <h4>Skills</h4>
          <ul>
            {resumeData.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {resumeData.certifications?.length > 0 && (
        <div className="preview-block">
          <h4>Certifications</h4>
          <ul>
            {resumeData.certifications.map((cert, i) => (
              <li key={i}>{cert.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
