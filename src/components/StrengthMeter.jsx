export default function StrengthMeter({ strength }) {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-emerald-500",
  ];

  return (
    <div>
      <div className="h-2 w-full bg-gray-300 rounded">
        <div
          className={`h-full rounded ${colors[strength.score]}`}
          style={{ width: `${(strength.score / 4) * 100}%` }}
        />
      </div>
      <p className="text-sm mt-1">{strength.label}</p>
    </div>
  );
}
