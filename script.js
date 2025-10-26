// Get DOM elements
const body = document.body;
const bgColorSelect = document.getElementById('bgColorSelect');
const decreaseFontBtn = document.getElementById('decreaseFont');
const increaseFontBtn = document.getElementById('increaseFont');
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const fontStyleSelect = document.getElementById('fontStyleSelect');

// Initialize current font size
let currentFontSize = 16;

// Change background color
bgColorSelect.addEventListener('change', function() {
    body.style.backgroundColor = this.value;
});

// Decrease font size
decreaseFontBtn.addEventListener('click', function() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        body.style.fontSize = currentFontSize + 'px';
    }
});

// Increase font size
increaseFontBtn.addEventListener('click', function() {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        body.style.fontSize = currentFontSize + 'px';
    }
});

// Toggle dark mode
toggleDarkModeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Update button text
    if (body.classList.contains('dark-mode')) {
        this.textContent = 'Toggle Light Mode';
    } else {
        this.textContent = 'Toggle Dark Mode';
    }
});

// Change font style
fontStyleSelect.addEventListener('change', function() {
    // Remove all font classes
    body.classList.remove('font-serif', 'font-sans-serif', 'font-monospace');
    
    // Add the selected font class
    body.classList.add(this.value);
});
