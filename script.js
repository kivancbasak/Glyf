document.addEventListener("DOMContentLoaded", () => {
    const textBold = document.getElementById("textBold");
    const textNormal = document.getElementById("textNormal");
    const textItalic = document.getElementById("textItalic");
    const fontSizeInput = document.getElementById("fontSize");
    const letterSpacingInput = document.getElementById("letterSpacing");
    const lineHeightInput = document.getElementById("lineHeight");
    const fontWeightInput = document.getElementById("fontWeight");
    const fontColorInput = document.getElementById("fontColor");
    const fontSelector = document.getElementById("fontSelector");

    const fontSizeValue = document.getElementById("fontSizeValue");
    const letterSpacingValue = document.getElementById("letterSpacingValue");
    const lineHeightValue = document.getElementById("lineHeightValue");
    const fontWeightValue = document.getElementById("fontWeightValue");
    const fontColorValue = document.getElementById("fontColorValue");

    // Google Fonts API Key (Replace with your key)
    const GOOGLE_FONTS_API_KEY = 'AIzaSyC3L7ZiHATQpMO0-qHuFx6FWMXAOlJ1dto';

    // Fetch Google Fonts dynamically
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(font => {
                let option = document.createElement("option");
                option.value = font.family;
                option.textContent = font.family;
                fontSelector.appendChild(option);
            });
        });

    // Update text preview styles
    fontSizeInput.addEventListener("input", () => {
        textBold.style.fontSize = `${fontSizeInput.value}px`;
        textNormal.style.fontSize = `${fontSizeInput.value}px`;
        textItalic.style.fontSize = `${fontSizeInput.value}px`;
        fontSizeValue.textContent = fontSizeInput.value;
    });

    letterSpacingInput.addEventListener("input", () => {
        textBold.style.letterSpacing = `${letterSpacingInput.value}px`;
        textNormal.style.letterSpacing = `${letterSpacingInput.value}px`;
        textItalic.style.letterSpacing = `${letterSpacingInput.value}px`;
        letterSpacingValue.textContent = letterSpacingInput.value;
    });

    lineHeightInput.addEventListener("input", () => {
        textBold.style.lineHeight = lineHeightInput.value;
        textNormal.style.lineHeight = lineHeightInput.value;
        textItalic.style.lineHeight = lineHeightInput.value;
        lineHeightValue.textContent = lineHeightInput.value;
    });

    fontWeightInput.addEventListener("input", () => {
        textBold.style.fontWeight = fontWeightInput.value;
        textNormal.style.fontWeight = fontWeightInput.value;
        textItalic.style.fontWeight = fontWeightInput.value;
        fontWeightValue.textContent = fontWeightInput.value;
    });

    fontColorInput.addEventListener("input", () => {
        const color = `rgb(${fontColorInput.value}, 0, ${255 - fontColorInput.value})`;
        textBold.style.color = color;
        textNormal.style.color = color;
        textItalic.style.color = color;
        fontColorValue.textContent = color;
    });

    fontSelector.addEventListener("change", () => {
        const selectedFont = fontSelector.value;
        textBold.style.fontFamily = selectedFont;
        textNormal.style.fontFamily = selectedFont;
        textItalic.style.fontFamily = selectedFont;

        // Load Google Font dynamically
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g, '+')}:wght@100;400;700;900&display=swap`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
    });

    // Set initial styles
    textBold.style.fontWeight = "bold";
    textNormal.style.fontWeight = "normal";
    textItalic.style.fontStyle = "italic";
    textBold.style.color = "#FF00FF";
    textNormal.style.color = "#FF00FF";
    textItalic.style.color = "#FF00FF";
    textBold.style.fontFamily = "Futura";
    textNormal.style.fontFamily = "Futura";
    textItalic.style.fontFamily = "Futura";
});