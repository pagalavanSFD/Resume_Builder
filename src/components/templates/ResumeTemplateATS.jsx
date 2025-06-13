// ResumeTemplateATS.jsx
import React, { forwardRef } from "react";
import "./ATSTemplateStyles.css";

const ResumeTemplateATS = forwardRef(({ data }, ref) => {
  const { personal, education, experience, projects, skills, certifications, summary } = data;

  return (
    <div className="ats-resume" ref={ref}>
      <h1>{personal?.fullName}</h1>
      <p>{personal?.email} | {personal?.phone} | {personal?.location} | {personal?.linkedin}</p>

      {summary && (
        <section>
          <h2>Professional Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {education?.length > 0 && (
        <section>
          <h2>Education</h2>
          {education.map((edu, i) => (
            <p key={i}><strong>{edu.degree}</strong>, {edu.school} ({edu.year})</p>
          ))}
        </section>
      )}

      {experience?.length > 0 && (
        <section>
          <h2>Experience</h2>
          {experience.map((exp, i) => (
            <div key={i}>
              <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {projects?.length > 0 && (
        <section>
          <h2>Projects</h2>
          {projects.map((proj, i) => (
            <div key={i}>
              <strong>{proj.title}</strong> – {proj.link}
              <p>{proj.description}</p>
            </div>
          ))}
        </section>
      )}

      {skills?.length > 0 && (
        <section>
          <h2>Skills</h2>
          <p>{skills.join(", ")}</p>
        </section>
      )}

      {certifications?.length > 0 && (
        <section>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
        </section>
      )}
    </div>
  );
});

export default ResumeTemplateATS;
