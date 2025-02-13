document.addEventListener("DOMContentLoaded", () => {
    const textBold = document.getElementById("textBold");
    const textNormal = document.getElementById("textNormal");
    const textItalic = document.getElementById("textItalic");
    const textInput = document.getElementById("textInput");
    const fontSizeInput = document.getElementById("fontSize");
    const letterSpacingInput = document.getElementById("letterSpacing");
    const lineHeightInput = document.getElementById("lineHeight");
    const wordSpacingInput = document.getElementById("wordSpacing");
    const fontColorInput = document.getElementById("fontColor");
    const fontSelector = document.getElementById("fontSelector");

    const fontSizeValue = document.getElementById("fontSizeValue");
    const letterSpacingValue = document.getElementById("letterSpacingValue");
    const lineHeightValue = document.getElementById("lineHeightValue");
    const wordSpacingValue = document.getElementById("wordSpacingValue");
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
        document.getElementById("textPreview").style.backgroundSize = `100% ${lineHeightInput.value * 20}px`;
    });

    wordSpacingInput.addEventListener("input", () => {
        textBold.style.wordSpacing = `${wordSpacingInput.value}px`;
        textNormal.style.wordSpacing = `${wordSpacingInput.value}px`;
        textItalic.style.wordSpacing = `${wordSpacingInput.value}px`;
        wordSpacingValue.textContent = wordSpacingInput.value;
    });

    fontColorInput.addEventListener("input", () => {
        const color = `rgb(${fontColorInput.value}, 0, ${255 - fontColorInput.value})`;
        textBold.style.color = color;
        textNormal.style.color = color;
        textItalic.style.color = color;
        fontColorValue.textContent = color;

        // Update slider, label, and input colors
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.style.background = color;
            slider.style.setProperty('--slider-thumb-color', color);
        });
        document.querySelectorAll('label').forEach(label => {
            label.style.color = color;
        });
        document.querySelectorAll('.text-input, .font-selector').forEach(input => {
            input.style.borderColor = color;
            input.style.color = color;
        });
        document.querySelectorAll('.text-input::placeholder').forEach(placeholder => {
            placeholder.style.color = color;
        });
        document.querySelectorAll('span').forEach(span => {
            span.style.color = color;
        });
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

    textInput.addEventListener("input", () => {
        textBold.textContent = textInput.value;
        textNormal.textContent = textInput.value;
        textItalic.textContent = textInput.value;
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
    document.getElementById("textPreview").style.backgroundSize = `100% ${lineHeightInput.value * 20}px`;

    // Set initial text from text input
    const initialText = textInput.value;
    textBold.textContent = initialText;
    textNormal.textContent = initialText;
    textItalic.textContent = initialText;

    // Set initial slider, label, and input colors
    document.querySelectorAll('input[type="range"]').forEach(slider => {
        slider.style.background = "#FF00FF";
        slider.style.setProperty('--slider-thumb-color', "#FF00FF");
    });
    document.querySelectorAll('label').forEach(label => {
        label.style.color = "#FF00FF";
    });
    document.querySelectorAll('.text-input, .font-selector').forEach(input => {
        input.style.borderColor = "#FF00FF";
        input.style.color = "#FF00FF";
    });
    document.querySelectorAll('.text-input::placeholder').forEach(placeholder => {
        placeholder.style.color = "#FF00FF";
    });
    document.querySelectorAll('span').forEach(span => {
        span.style.color = "#FF00FF";
    });
});