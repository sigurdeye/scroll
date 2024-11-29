let snowEnabled = true;

function createSymbol() {
    if (!snowEnabled) return;
    
    const symbols = ['❄', '❅', '❆', '❉', '❊'];
    const symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    
    symbol.style.left = `${Math.random() * 100}vw`;
    symbol.style.top = '-20px';
    
    const size = 16 + Math.random() * 20;
    symbol.style.fontSize = `${size}px`;
    
    symbol.style.opacity = 0.15;
    
    symbol.style.setProperty('--random-x', Math.random() * 2 - 1);
    
    const duration = 10 + Math.random() * 10;
    symbol.style.animation = `snowfall ${duration}s linear infinite`;
    
    document.body.appendChild(symbol);
    
    setTimeout(() => {
        symbol.remove();
    }, duration * 1000);
}

// Initialize toggle button when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.snow-toggle');
    
    toggleButton.addEventListener('click', () => {
        snowEnabled = !snowEnabled;
        
        // If snow is disabled, remove all existing snowflakes
        if (!snowEnabled) {
            document.querySelectorAll('.symbol').forEach(symbol => {
                symbol.remove();
            });
        }
    });
});

// Create new symbols periodically
setInterval(createSymbol, 200);

// Create initial snowflakes
for(let i = 0; i < 30; i++) {
    createSymbol();
} 