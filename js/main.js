// main.js

// Fonction pour valider le formulaire candidature
function validateCandidatureForm() {
    const form = document.getElementById('candidatureForm');
    if (!form) return; // si le formulaire n'existe pas, on ne fait rien

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const position = document.getElementById('position').value.trim();
    const club = document.getElementById('club').value.trim();
    const video = document.getElementById('video').value.trim();

    let errors = [];

    if (!name) errors.push("Le nom est requis.");
    if (!email || !email.includes("@")) errors.push("Email invalide.");
    if (!age || isNaN(age)) errors.push("Age invalide.");
    if (!position) errors.push("Position requise.");
    if (!club) errors.push("Club actuel requis.");
    if (!video) errors.push("Lien ou vidéo requis.");

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }

    alert("Formulaire soumis avec succès !");
    form.submit();
}

// Fonction pour gérer le paiement
function handlePayment() {
    const paymentBtn = document.getElementById('payButton');
    if (!paymentBtn) return;

    paymentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Paiement réussi ! Redirection vers la confirmation...");
        window.location.href = "confirmation.html"; // Crée cette page plus tard
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('candidatureForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            validateCandidatureForm();
        });
    }

    handlePayment();
});
