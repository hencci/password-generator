export default function HistoryList({ history }) {
  if (!history.length) return null;

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">History</h3>
      <ul className="space-y-1 text-sm">
        {history.map((pwd, i) => (
          <li
            key={i}
            className="truncate bg-gray-200 dark:bg-gray-800 p-2 rounded"
          >
            {pwd}
          </li>
        ))}
      </ul>
    </div>
  );
}
