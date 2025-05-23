const textArea = document.getElementById('textInput');
let placeholderText = "Enter text here to translate into Morse code...";
let currentIndex = 0;
let typingInterval;

function typePlaceholder() {
  clearTimeout(typingInterval);
  textArea.placeholder = placeholderText.substring(0, currentIndex++);
  if (currentIndex > placeholderText.length) {
    currentIndex = 0;
    typingInterval = setTimeout(typePlaceholder, 1000);
  } else {
    typingInterval = setTimeout(typePlaceholder, 100);
  }
}

function setPlaceholder(newText) {
  placeholderText = newText;
  currentIndex = 0;
  typePlaceholder();
}

window.onload = () => {
  typePlaceholder();
};


  window.onload = () => {
    typePlaceholder();
  };

  // Morse code translation
  const morseCodeMap = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.',
    F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
    K: '-.-', L: '.-..', M: '--', N: '-.', O: '---',
    P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
    U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--',
    Z: '--..', 0: '-----', 1: '.----', 2: '..---',
    3: '...--', 4: '....-', 5: '.....', 6: '-....',
    7: '--...', 8: '---..', 9: '----.', ' ': '/',
  };

  const textFromMorseMap = {};
for (const [letter, morse] of Object.entries(morseCodeMap)) {
  textFromMorseMap[morse] = letter;
}


  function translateToMorse() {
    const inputText = document.getElementById('textInput').value.toUpperCase();
    const outputText = inputText.split('').map(char =>
      morseCodeMap[char] || ''
    ).join(' ');
    document.getElementById('output').value = outputText;
  }

  function clearFields() {
    document.getElementById('textInput').value = '';
    document.getElementById('output').value = '';
  }


  function translateToText() {
  const inputMorse = document.getElementById('textInput').value.trim();
  const outputText = inputMorse.split(' ').map(code => 
    textFromMorseMap[code] || ''
  ).join('');
  document.getElementById('output').value = outputText;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-group button');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}


