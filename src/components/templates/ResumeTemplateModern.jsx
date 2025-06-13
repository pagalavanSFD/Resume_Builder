import React, { forwardRef } from "react";
import "./ResumeTemplateModern.css";

const ResumeTemplateModern = forwardRef(({ data }, ref) => {
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

  return (
    <div className="resume-modern" ref={ref}>
      <header className="modern-header">
        <h1>{personalInfo?.fullName || "Your Name"}</h1>
        <p>
          {personalInfo?.email} | {personalInfo?.phone} | {personalInfo?.location}
        </p>
      </header>

      {summary && (
        <section>
          <h2>Professional Summary</h2>
          <p>{summary}</p>
        </section>
      )}

      {experience?.length > 0 && (
        <section>
          <h2>Experience</h2>
          {experience.map((exp, i) => (
            <div className="item-block" key={i}>
              <h3>{exp.role} @ {exp.company}</h3>
              <p className="item-duration">{exp.duration}</p>
              <ul>
                {exp.responsibilities?.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {education?.length > 0 && (
        <section>
          <h2>Education</h2>
          {education.map((edu, i) => (
            <div className="item-block" key={i}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution} ({edu.year})</p>
            </div>
          ))}
        </section>
      )}

      {projects?.length > 0 && (
        <section>
          <h2>Projects</h2>
          {projects.map((proj, i) => (
            <div className="item-block" key={i}>
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              {proj.link && (
                <p><a href={proj.link} target="_blank" rel="noreferrer">{proj.link}</a></p>
              )}
            </div>
          ))}
        </section>
      )}

      {skills?.length > 0 && (
        <section>
          <h2>Skills</h2>
          <ul className="inline-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {certifications?.length > 0 && (
        <section>
          <h2>Certifications</h2>
          <ul className="inline-list">
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
});

export default ResumeTemplateModern;
