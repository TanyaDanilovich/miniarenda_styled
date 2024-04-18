export function getRootFontSize() {
  let rem = 16;
  const html = document.querySelector("html");
  if (html) {
    rem = parseInt(
      window.getComputedStyle(html).getPropertyValue("font-size").slice(0, -2),
    );
  }
  return rem;
}
