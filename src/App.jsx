import PasswordDisplay from "./components/PassworDisplay.jsx";
import StrengthMeter from "./components/StrengthMeter.jsx";
import RuleToggle from "./components/RuleToggle.jsx";
import HistoryList from "./components/HistoryList.jsx";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator.js";
import { useDarkMode } from "./hooks/useDarkMode";
import { calculateStrength } from "./utils/passwordStrength";

export default function App() {
  const { password, length, rules, history, setLength, setRules, generate } =
    usePasswordGenerator();

  const [dark, setDark] = useDarkMode();
  const strength = calculateStrength(password);

  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <header className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Password Generator</h1>
        <button onClick={() => setDark(!dark)}>{dark ? "🌙" : "☀️"}</button>
      </header>

      <PasswordDisplay password={password} />
      <StrengthMeter strength={strength} />

      <div className="space-y-2 mt-4">
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(+e.target.value)}
        />
        <p>Length: {length}</p>

        {Object.keys(rules).map((rule) => (
          <RuleToggle
            key={rule}
            label={rule}
            checked={rules[rule]}
            onChange={() => setRules({ ...rules, [rule]: !rules[rule] })}
          />
        ))}
      </div>

      <button
        onClick={generate}
        className="w-full mt-4 bg-primary text-white py-2 rounded"
      >
        Generate Password
      </button>

      <HistoryList history={history} />
    </div>
  );
}
