export function setHtml(selector) {
  return (html) => {
    document.querySelector(selector).innerHTML = html;
  };
}
