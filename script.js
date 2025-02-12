document.addEventListener("DOMContentLoaded", () => {
    const textPreview = document.getElementById("textPreview");
    const fontSizeInput = document.getElementById("fontSize");
    const letterSpacingInput = document.getElementById("letterSpacing");
    const lineHeightInput = document.getElementById("lineHeight");
    const fontWeightInput = document.getElementById("fontWeight");
    const fontColorInput = document.getElementById("fontColor");
    const fontSelector = document.getElementById("fontSelector");

    // Google Fonts API Key (Replace with your key)
    const GOOGLE_FONTS_API_KEY = 'AIzaSyC3L7ZiHATQpMO0-qHuFx6FWMXAOlJ1dto';

    // Fetch Google Fonts dynamically
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            data.items.slice(0, 50).forEach(font => {
                let option = document.createElement("option");
                option.value = font.family;
                option.textContent = font.family;
                fontSelector.appendChild(option);
            });
        });

    // Update text preview styles
    fontSizeInput.addEventListener("input", () => {
        textPreview.style.fontSize = `${fontSizeInput.value}px`;
    });

    letterSpacingInput.addEventListener("input", () => {
        textPreview.style.letterSpacing = `${letterSpacingInput.value}px`;
    });

    lineHeightInput.addEventListener("input", () => {
        textPreview.style.lineHeight = lineHeightInput.value;
    });

    fontWeightInput.addEventListener("input", () => {
        textPreview.style.fontWeight = fontWeightInput.value;
    });

    fontColorInput.addEventListener("input", () => {
        textPreview.style.color = fontColorInput.value;
    });

    fontSelector.addEventListener("change", () => {
        const selectedFont = fontSelector.value;
        textPreview.style.fontFamily = selectedFont;

        // Load Google Font dynamically
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g, '+')}:wght@100;400;700;900&display=swap`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
    });
});