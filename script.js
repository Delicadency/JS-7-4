function colorizeElement(node) {
  if (!node.tagName) {
    console.error("Nie znaleziono elementu w drzewie DOM");
    return;
  }
  node.classList.add("new-class");
  let tagName = node.tagName.toLowerCase();
  node.setAttribute("data-tag", tagName);
  node.style.color = "#f1f1f1";
  node.style.fontSize = "12px";
  return node.outerHTML;
}
