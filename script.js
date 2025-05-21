 const textArea = document.getElementById('textInput');
  const placeholderText = "Enter text here to translate into Morse code...";
  let currentIndex = 0;

  function typePlaceholder() {
    textArea.placeholder = placeholderText.substring(0, currentIndex++);
    if (currentIndex > placeholderText.length) {
      currentIndex = 0;
      setTimeout(typePlaceholder, 1000);
    } else {
      setTimeout(typePlaceholder, 100);
    }
  }

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

