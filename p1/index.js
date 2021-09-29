const colors = document.getElementById('colors');
const screen = document.getElementById('screen');
const hexadecimal = document.getElementById('hex')
const colorCount = 30;

window.onload = () => {
    for (let i = 0; i < colorCount; i++) {
         colors.innerHTML += color('#' + randHex())
    }
}

function randHex() {
    const randColor = Math.floor(Math.random()*16777215).toString(16);
    return randColor;
}

function getHex(e) {
   let hex = rgb2hex(e.style.background);
   hexadecimal.innerHTML = hex;
   screen.style.background = hex;
}

function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  function rgb2hex(rgb) {
   rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/);
   return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }