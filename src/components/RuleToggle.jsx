export default function RuleToggle({ label, checked, onChange }) {
  return (
    <label className="flex justify-between items-center">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-primary"
      />
    </label>
  );
}
