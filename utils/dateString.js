const parseDate = (dateStr) => {
  if (!dateStr) return null;
  if (!dateStr.includes("-")) return null;

  const [day, month, year] = dateStr.split("-");
  return new Date(`${year}-${month}-${day}`);
};

module.exports = { parseDate };
