document.getElementById("kosnujButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const kosnujText = inputText.replace(/(po|ko)/gi, (match) => match.toUpperCase());
    document.getElementById("inputText").value = kosnujText;
});
