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

// Morse code mapping
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

// Reverse mapping for Morse to Text
const textFromMorseMap = {};
for (const [letter, morse] of Object.entries(morseCodeMap)) {
  textFromMorseMap[morse] = letter;
}

// Translate text to Morse
function translateToMorse() {
  const inputText = document.getElementById('textInput').value.toUpperCase();
  const outputText = inputText.split('').map(char =>
    morseCodeMap[char] || ''
  ).join(' ');
  document.getElementById('output').value = outputText;
}

// Translate Morse to text
function translateToText() {
  const inputMorse = document.getElementById('textInput').value.trim();
  const outputText = inputMorse.split(' ').map(code =>
    textFromMorseMap[code] || ''
  ).join('');
  document.getElementById('output').value = outputText;
}

// Clear both fields
function clearFields() {
  document.getElementById('textInput').value = '';
  document.getElementById('output').value = '';
}

// Button active state toggle
function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-group button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (button) button.classList.add('active');
}

// Matrix effect
function startMatrixEffect(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  canvas.width = 100;
  canvas.height = window.innerHeight;

  const letters = 'アァイィウヴエエェオカキクケコサシスセソタチツテトナニヌネノハヒフホマミムメモヤユヨラリルレロワヲン'.split('');
  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }

    requestAnimationFrame(draw);
  }

  draw();
}

// Initialize on window load
window.onload = function () {
  typePlaceholder();
  startMatrixEffect('matrix-left');
  startMatrixEffect('matrix-right');
};
