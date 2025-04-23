function getLinkAttributes() {
  const link = document.getElementById("myLink");
  const attributes = {
    href: link.getAttribute("href"),
    hreflang: link.getAttribute("hreflang"),
    rel: link.getAttribute("rel"),
    target: link.getAttribute("target"),
    type: link.getAttribute("type"),
  };

  const output = `
        <strong>Link Attributes:</strong><br>
        the value of href: ${attributes.href}<br>
        the value of hreflang: ${attributes.hreflang}<br>
        the value of rel: ${attributes.rel}<br>
        the value of target: ${attributes.target}<br>
        the value of type: ${attributes.type}
    `;

  document.getElementById("output").innerHTML = output;
}
