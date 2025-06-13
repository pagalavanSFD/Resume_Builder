import { useEffect, useState } from "react";
import { useResume } from "../../context/ResumeContext";
import "./FormStyles.css";

export default function SummaryForm() {
  const { resumeData, updateSection } = useResume();
  const savedSummary = resumeData.summary || "";

  const [summary, setSummary] = useState(savedSummary);

  const handleChange = (e) => {
    setSummary(e.target.value);
  };

  const handleSave = () => {
    updateSection("summary", summary);
    alert("Summary saved! ✅");
  };

  useEffect(() => {
    setSummary(savedSummary);
  }, [savedSummary]);

  return (
    <div className="form-block">
      <h2 className="form-title">Professional Summary</h2>

      <div className="form-block">
        <textarea
          value={summary}
          onChange={handleChange}
          placeholder="Write a short professional summary"
          className="input-field"
          rows={5}
        />
      </div>

      <button onClick={handleSave} className="save-btn">💾 Save</button>
    </div>
  );
}
