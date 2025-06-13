// BuilderPage.jsx
import { useState } from "react";

// Form Sections
import CertificationsForm from "../components/form/CertificationsForm";
import EducationForm from "../components/form/EducationForm";
import ExperienceForm from "../components/form/ExperienceForm";
import PersonalInfoForm from "../components/form/PersonalInfoForm";
import ProjectsForm from "../components/form/ProjectsForm";
import SkillsForm from "../components/form/SkillsForm";
import SummaryForm from "../components/form/SummaryForm";

// Tab + Layout Styling
import TabNavigation from "../components/TabNavigation";
import "./BuilderPage.css";
import LivePreview from "../components/LivePreview";
import ExportPDF from "../components/ExportPDF";
import ATSExport from "../components/ATSExport";
import FinalReview from "../components/FinalReview";
import LocalSave from "../components/LocalSave";

// Live Preview + Tools


// Main Tabs
const tabs = [
  "Personal Info",
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "Certifications",
  "Summary",
];

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState("Personal Info");

  const renderActiveForm = () => {
    switch (activeTab) {
      case "Personal Info":
        return <PersonalInfoForm />;
      case "Education":
        return <EducationForm />;
      case "Experience":
        return <ExperienceForm />;
      case "Projects":
        return <ProjectsForm />;
      case "Skills":
        return <SkillsForm />;
      case "Certifications":
        return <CertificationsForm />;
      case "Summary":
        return <SummaryForm />;
      case "FinalReview":
        return <FinalReview />;
      case "ExportPDF":
        return <ExportPDF/>;
      case "ATSOutput":
        return <ATSExport />;
      case "SaveLocal":
        return <LocalSave />;
      default:
        return null;
    }
  };

  return (
    <div className="builder-container">
      {/* Left: Navigation + Forms + Tool Buttons */}
      <div className="builder-left">
        <div className="app-container">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
          />
          <div className="form-area">{renderActiveForm()}</div>

          {/* Tool Actions */}
          <div className="action-buttons">
            <button onClick={() => setActiveTab("FinalReview")}>📝 Final Review</button>
            {/* <button onClick={() => setActiveTab("ExportPDF")}>⬇️ Export as PDF</button> */}
            {/* <button onClick={() => setActiveTab("ATSExport")}>📄 ATS Output</button> */}
            <button onClick={() => setActiveTab("SaveLocal")}>💾 Save to Local</button>
          </div>
        </div>
      </div>

      {/* Right: Live Preview */}
      {/* <div className="builder-right">
        <div className="app-container">
          <LivePreview />
        </div>
      </div> */}
    </div>
  );
}
