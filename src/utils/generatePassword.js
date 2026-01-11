const CHARSETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}<>?",
};

export function generatePassword(length, rules) {
  let pool = "";
  Object.keys(rules).forEach((rule) => {
    if (rules[rule]) pool += CHARSETS[rule];
  });

  if (!pool) return "";

  return Array.from(
    { length },
    () => pool[Math.floor(Math.random() * pool.length)]
  ).join("");
}
