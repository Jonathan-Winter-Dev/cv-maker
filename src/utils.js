import html2pdf from "html2pdf.js";

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

export async function saveElementAsPdf(element) {
  element.classList.toggle("saving");

  const options = {
    filename: "newCv.pdf",
    pagebreak: { mode: "avoid-all" },
  };
  await html2pdf().set(options).from(element).save();

  element.classList.toggle("saving");
}
