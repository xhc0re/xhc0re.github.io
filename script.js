function applySystemTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDarkScheme) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemTheme);

applySystemTheme();

document.getElementById("kosnujButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const kosnujText = inputText.replace(/(po|ko)/gi, (match) => match.toUpperCase());
    document.getElementById("inputText").value = kosnujText;
});

document.getElementById("toggleThemeButton").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});
