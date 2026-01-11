import { motion } from "framer-motion";

export default function PasswordDisplay({ password }) {
  const copy = async () => {
    await navigator.clipboard.writeText(password);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 p-3 rounded"
    >
      <input
        readOnly
        value={password}
        className="flex-1 bg-transparent outline-none"
      />
      <button onClick={copy} className="text-primary font-semibold">
        Copy
      </button>
    </motion.div>
  );
}
