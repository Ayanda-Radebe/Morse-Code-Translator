const morseCodeMap = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.',
  F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
  K: '-.-', L: '.-..', M: '--', N: '-.', O: '---',
  P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
  U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--',
  Z: '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....',
  '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};

function translateToMorse() {
  const input = document.getElementById('textInput').value.toUpperCase();
  let output = '';

  for (let char of input) {
    if (morseCodeMap[char]) {
      output += morseCodeMap[char] + ' ';
    } else {
      output += '? '; // Unknown characters like punctuation
    }
  }

  document.getElementById('output').value = output.trim();
}

