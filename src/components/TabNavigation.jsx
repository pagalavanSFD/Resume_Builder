
// TabNavigation.jsx
import "./TabNavigation.css";

export default function TabNavigation({ tabs, activeTab, onTabClick }) {
  return (
    <div className="tab-nav">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`tab-item ${activeTab === tab ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
