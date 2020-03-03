// Braille
// braille.js
//
// This file makes things unaccessibly accessible
//
// @author Vivek Bhookya @mrvivacious

// Thank you https://www.pharmabraille.com/pharmaceutical-braille/the-braille-alphabet/
let braille = {
  'a' : '⠁',
  'b' : '⠃',
  'c' : '⠉',
  'd' : '⠙',
  'e' : '⠑',
  'f' : '⠋',
  'g' : '⠛',
  'h' : '⠓',
  'i' : '⠊',
  'j' : '⠚',
  'k' : '⠅',
  'l' : '⠇',
  'm' : '⠍',
  'n' : '⠝',
  'o' : '⠕',
  'p' : '⠏',
  'q' : '⠟',
  'r' : '⠗',
  's' : '⠎',
  't' : '⠞',
  'u' : '⠥',
  'v' : '⠧',
  'w' : '⠺',
  'x' : '⠭',
  'y' : '⠽',
  'z' : '⠵',
  '1' : '⠼⠁',
  '2' : '⠼⠃',
  '3' : '⠼⠉',
  '4' : '⠼⠙',
  '5' : '⠼⠑',
  '6' : '⠼⠋',
  '7' : '⠼⠛',
  '8' : '⠼⠓',
  '9' : '⠼⠊',
  '0' : '⠼⠚',
  ',' : '⠂',
  ';' : '⠆',
  ':' : '⠒',
  '.' : '⠲',
  '?' : '⠦',
  '!' : '⠖',
  '‘' : '⠄',
  '“' : '⠄⠶',
  '“' : '⠘⠦',
  '”' : '⠘⠴',
  '‘' : '⠄⠦',
  '’' : '⠄⠴',
  '(' : '⠐⠣',
  ')' : '⠐⠜',
  '/' : '⠸⠌',
  '\\' : '⠸⠡',
  '–' : '⠤',
  '–' : '⠠⠤',
  '—' : '⠐⠠⠤'
};

// Get innerText
// Split
// For item in split
// Split each char
// Replace with braille

function toBraille(text) {
  let letters = Object.keys(braille);

  for (let i = 0; letters[i]; i++) {
    let c = letters[i];

    while (text.includes(c)) {
      text = text.replace(c,braille[c]);
    }
  }

  return text;
}

window.onload = () => {
  // This kills the website
  // let div = document.getElementsByTagName('div');
  //
  // for (let i = 0; div[i]; i++) {
  //   div[i].innerText = div[i].innerText.toLowerCase();
  //   div[i].innerText = toBraille(div[i].innerText);
  // }

  let h1 = document.getElementsByTagName('h1');

  for (let i = 0; h1[i]; i++) {
    h1[i].innerText = h1[i].innerText.toLowerCase();
    h1[i].innerText = toBraille(h1[i].innerText);
  }

  let p = document.getElementsByTagName('p');

  for (let i = 0; p[i]; i++) {
    p[i].innerText = p[i].innerText.toLowerCase();
    p[i].innerText = toBraille(p[i].innerText);
  }

}
