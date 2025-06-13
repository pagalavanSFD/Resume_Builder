import { useContext, useState, useEffect } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import "./FormStyles.css";

export default function PersonalInfoForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    location: "",
  });

  // Load saved data into local state
useEffect(() => {
  if (resumeData.personalInfo) {
    setFormData(resumeData.personalInfo);
  }
}, [resumeData.personalInfo]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: formData,
    }));
    alert("Personal Information saved! ✅");
  };

  return (
    <div className="form-block">
      <h2 className="form-title">Personal Information</h2>

      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="input-field"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="input-field"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="input-field"
      />

      <input
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn Profile"
        className="input-field"
      />

      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location (City, Country)"
        className="input-field"
      />

      <button className="save-btn" onClick={handleSave}>💾 Save</button>
    </div>
  );
}
