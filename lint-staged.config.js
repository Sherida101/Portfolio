module.exports = {
  skipEmpty: "skip", // or 'git add' or 'skip' or 'warn'
  "*.json": ["prettier-package-json --write", "prettier --write"],
  "*.{js,jsx,ts,tsx}": ["eslint --cache --fix", "prettier --write"],
  "*.md": ["prettier --write"],
  "*": ["./scripts/cspell-wrapper.sh --no-progress --no-summary"],
};
