import React, { forwardRef } from "react";

import "./ResumePreview.css";
import "./ResumePreviewModern.css";
import "./ResumePreviewElegant.css";
import { useResume } from "../context/ResumeContext";

const ResumePreview = forwardRef(({ data }, ref) => {
  const { selectedTemplate } = useResume();

  if (!data) return null;

  const {
    personalInfo,
    education,
    experience,
    projects,
    skills,
    certifications,
    summary,
  } = data;

  const getTemplateClass = () => {
    switch (selectedTemplate) {
      case "modern":
        return "resume-preview--modern";
      case "elegant":
        return "resume-preview--elegant";
      default:
        return "resume-preview"; // fallback (default template)
    }
  };

  return (
    <div className={getTemplateClass()} ref={ref}>
      <header>
        <h2>{personalInfo?.fullName || "Your Name"}</h2>
        <p>{personalInfo?.location}</p>
        <p>
          📧 {personalInfo?.email} | 📞 {personalInfo?.phone}
        </p>
        {personalInfo?.linkedin && (
          <p>
            🔗{" "}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personalInfo.linkedin}
            </a>
          </p>
        )}
      </header>

      <hr />

      <section>
        <h3>Professional Summary</h3>
        <p>{summary || "An enthusiastic individual with..."}</p>
      </section>

      {education?.length > 0 && (
        <section>
          <h3>Education</h3>
          {education.map((edu, idx) => (
            <div key={idx}>
              <p>
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </p>
            </div>
          ))}
        </section>
      )}

      {experience?.length > 0 && (
        <section>
          <h3>Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx}>
              <p>
                <strong>{exp.jobTitle}</strong> at {exp.company}
              </p>
              <p>{exp.duration}</p>
              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {projects?.length > 0 && (
        <section>
          <h3>Projects</h3>
          {projects.map((proj, idx) => (
            <div key={idx}>
              <p>
                <strong>{proj.name}</strong>
              </p>
              <p>{proj.description}</p>
            </div>
          ))}
        </section>
      )}

      {skills?.length > 0 && (
        <section>
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {certifications?.length > 0 && (
        <section>
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
});

export default ResumePreview;
