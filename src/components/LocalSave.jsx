
import { useResume } from "../context/ResumeContext";


export default function LocalSave() {
  const { resumeData, setResumeData } = useResume(); // ✅ FIXED

  const saveToLocal = () => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    alert("✅ Resume data saved to localStorage!");
  };

  const loadFromLocal = () => {
    const saved = localStorage.getItem("resumeData");
    if (saved) {
      setResumeData(JSON.parse(saved)); // ✅ FIXED
      alert("✅ Resume data loaded from localStorage!");
    } else {
      alert("⚠️ No saved data found.");
    }
  };

  const clearLocal = () => {
    localStorage.removeItem("resumeData");
    alert("🗑️ Local resume data cleared.");
  };

  return (
    <div className="form-block">
      <h2 className="form-title">Local Resume Storage</h2>
      <p>You can save your work locally and come back to it anytime.</p>
      <button onClick={saveToLocal} className="save-btn">💾 Save Locally</button>
      <button onClick={loadFromLocal} className="add-btn">📂 Load Saved</button>
      <button onClick={clearLocal} className="add-btn">🧹 Clear Local</button>
    </div>
  );
}
