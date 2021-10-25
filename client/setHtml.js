export const setHtml = (selector) => (html) => {
  document.querySelector(selector).innerHTML = html;
};
