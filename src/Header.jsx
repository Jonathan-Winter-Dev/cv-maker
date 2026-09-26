import { saveElementAsPdf } from "./utils";
export default function HeaderBar() {
  function handleDownloadCv() {
    saveElementAsPdf(document.querySelector(".cvPage"));
  }
  return (
    <header>
      <h1>Cv Maker</h1>
      <button onClick={handleDownloadCv} className="download">
        Download Cv
      </button>
    </header>
  );
}
