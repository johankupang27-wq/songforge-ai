const form = document.getElementById("generator");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const prompt = document.getElementById("prompt").value.trim();
    const genre = document.getElementById("genre").value;
    const mood = document.getElementById("mood").value;
    const vocal = document.getElementById("vocal").value;

    if (!prompt) {
        alert("Silakan tulis ide lagu terlebih dahulu.");
        return;
    }

    const used = localStorage.getItem("songforge_free_used");

    if (used === "1") {
        alert(
            "Free generation sudah digunakan pada perangkat ini. " +
            "Silakan upgrade ke Pro atau Creator untuk membuat lagu berikutnya."
        );
        return;
    }

    document.getElementById("resultText").innerText =
        genre + " • " + mood + " • " + vocal + " • " + prompt;

    result.style.display = "block";

    localStorage.setItem("songforge_free_used", "1");

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
