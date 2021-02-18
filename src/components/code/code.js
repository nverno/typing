/* distribute classnames from parent elements to each individual letter,
 * wrapping each letter in a span */
export const parseElement = (ele, cname) => {
  if (ele.nodeName === 'SPAN') {
    cname = cname + ' ' + ele.className;
    return Array.from(ele.childNodes).reduce(
      (acc, e) =>
        acc.concat(
          parseElement(e, cname + (e.className ? ' ' + e.className : ''))
        ),
      []
    );
  }

  /* debugger; */
  let parts = Array.from(ele.textContent.split('\n')),
    len = parts.length;

  return parts.reduce((acc, text, idx) => {
    /* mark preceding spaces on newlines to skip */
    let i = 0;
    while (text[i] === ' ') ++i;
    acc.push(`<span class='skip'>${text.slice(0, i)}</span>`);

    let res = acc.concat(
      text
        .slice(i)
        .split('')
        .map(letter => `<span class="${cname} pending">${letter}</span>`)
    );

    if (idx !== len - 1)
      res.push(`<span class='return pending'>
</span>`);

    return res;
  }, []);
};

// Parse highlighted pre-highlighted code nodes
// Wraps individual characters in spans and adds special classes
// to mark returns, pending, and skips
export const parseCode = code => {
  let res = [];

  for (const node of code.childNodes) {
    if (node.className === 'hljs-comment') {
      node.classList.add('skip');
      res.push(node.outerHTML);
    } else {
      res = res.concat(parseElement(node, ''));
    }
  }

  return res;
};
