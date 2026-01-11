import { useState, useEffect } from "react";
import { generatePassword } from "../utils/generatePassword.js";

export function usePasswordGenerator() {
  const [length, setLength] = useState(12);
  const [rules, setRules] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: false,
  });
  const [password, setPassword] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("password-history")) || []
  );

  useEffect(() => {
    if (password) {
      const updated = [password, ...history].slice(0, 5);
      setHistory(updated);
      localStorage.setItem("password-history", JSON.stringify(updated));
    }
  }, [password]);

  const generate = () => {
    const pwd = generatePassword(length, rules);
    setPassword(pwd);
  };

  return {
    password,
    length,
    rules,
    history,
    setLength,
    setRules,
    generate,
  };
}
