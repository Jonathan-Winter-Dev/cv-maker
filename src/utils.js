const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function inputDateToString(inputDate) {
  console.log(inputDate);

  const monthIndex = Number(inputDate.slice(5, 7)) - 1;

  console.log(MONTHS[monthIndex]);

  return `${MONTHS[monthIndex]} ${inputDate.slice(0, 4)}`;
}
