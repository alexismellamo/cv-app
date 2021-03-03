export const getYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en", { year: "numeric" });
};