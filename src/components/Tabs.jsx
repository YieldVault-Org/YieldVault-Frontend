/**
 * Minimal controlled tab switcher.
 * @param {object} props
 * @param {Array<{ id: string, label: string }>} props.tabs
 * @param {string} props.active
 * @param {(id: string) => void} props.onChange
 */
export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={active === tab.id}
          className={active === tab.id ? 'tab tab-active' : 'tab'}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
