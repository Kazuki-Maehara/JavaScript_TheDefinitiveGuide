function html(strings, ...values) {
  // Convert each value to a string and escape special HTML characters.
  let escaped = values.map(v => String(v)
    .replace("&", "&amp;")
    .replace("<", "&lt;")
    .replace(">", "&gt;")
    .replace('"', "&quot;")
    .replace("'", "&#39;")
  );

  // Return the concatenated strings and escaped values.
  let result = strings[0];
  for (let i = 0; i < escaped.length; i++) {
    result += escaped[i] + strings[i+1];
  }
  return result;
}

let res = "";

let operator = "<";
res = html`<b>x ${operator} y</b>`;
console.log(res);

let kind = "game", name = "D&D";
res = html`<div class="${kind}">${name}</div>`
console.log(res);
