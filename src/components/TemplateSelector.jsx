import { useResume } from "../context/ResumeContext";
import "./TemplateSelector.css";

export default function TemplateSelector() {
  const { selectedTemplate, setSelectedTemplate } = useResume();

  const templates = [
    { id: "default", name: "🧾 Basic (Default)" },
    { id: "modern", name: "🖋️ Modern" },
    { id: "elegant", name: "💼 Elegant" },
  ];

  return (
    <div className="form-block">
      <h3 className="form-title">🎨 Choose a Template</h3>
      <div className="template-options">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            className={`template-btn ${selectedTemplate === tpl.id ? "active" : ""}`}
            onClick={() => setSelectedTemplate(tpl.id)}
          >
            {tpl.name}
          </button>
        ))}
      </div>
    </div>
  );
}
