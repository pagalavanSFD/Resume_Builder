import { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
export const ResumeContext = createContext();

// 2️⃣ Create the provider
export const ResumeProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("default");
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      linkedIn: "",
      github: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
    summary: "",
  });

  const updateSection = (section, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

 
  return (
  <ResumeContext.Provider
    value={{
      resumeData,
      setResumeData,
      setAllData: setResumeData,
      updateSection,
      selectedTemplate,
      setSelectedTemplate, // New setter
    }}
  >

      {children}
    </ResumeContext.Provider>
  );
};

// 3️⃣ Create a hook for easy access
export const useResume = () => useContext(ResumeContext);
