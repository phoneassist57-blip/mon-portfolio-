// 🌊 Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 📩 Envoi du formulaire avec EmailJS + confirmation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = this;
  const confirmation = document.getElementById("confirmation");

  emailjs.sendForm("EmailJS", "template_qhb0k26", form)
    .then(function() {
      form.reset();
      confirmation.style.display = "block";
    }, function(error) {
      alert("Erreur lors de l'envoi : " + error.text);
    });
});
