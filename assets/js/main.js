(() => {
  "use strict";
  const entreprise = window.ENTREPRISE || {};
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }));
  }

  document.querySelectorAll("[data-company]").forEach(el => {
    const key = el.dataset.company;
    if (key && entreprise[key]) el.textContent = entreprise[key];
  });

  document.querySelectorAll("[data-whatsapp-service]").forEach(link => {
    link.addEventListener("click", event => {
      const phone = String(entreprise.whatsapp || "").replace(/\D/g, "");
      if (!phone) {
        event.preventDefault();
        alert("Le numéro WhatsApp de l’entreprise doit d’abord être ajouté dans assets/js/config.js.");
        return;
      }
      const service = link.dataset.whatsappService || "une prestation";
      link.href = `https://wa.me/${phone}?text=${encodeURIComponent(`Bonjour ${entreprise.nom}, je souhaite avoir des renseignements sur : ${service}.`)}`;
    });
  });

  const form = document.querySelector("#appointment-form");
  if (form) {
    const dateInput = form.querySelector('[name="date"]');
    if (dateInput) {
      const today = new Date();
      const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      dateInput.min = localDate;
    }
    form.addEventListener("submit", event => {
      event.preventDefault();
      const status = document.querySelector("#form-status");
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const consent = data.get("consent");
      if (!consent) {
        status.textContent = "Veuillez accepter l’utilisation des informations pour traiter votre demande.";
        status.className = "form-status error";
        return;
      }
      const phone = String(entreprise.whatsapp || "").replace(/\D/g, "");
      if (!phone) {
        status.textContent = "Le formulaire est valide, mais le numéro WhatsApp de la salle n’est pas encore configuré. Contactez la salle par téléphone.";
        status.className = "form-status error";
        return;
      }
      const message = [
        `Bonjour ${entreprise.nom}, je souhaite demander un rendez-vous / une visite.`,
        `Nom : ${data.get("name")}`,
        `Téléphone : ${data.get("phone")}`,
        `E-mail : ${data.get("email") || "Non renseigné"}`,
        `Service : ${data.get("service")}`,
        `Date souhaitée : ${data.get("date")}`,
        `Heure souhaitée : ${data.get("time")}`,
        `Contact préféré : ${data.get("contact")}`,
        `Précisions : ${data.get("message") || "Aucune"}`
      ].join("\n");
      status.textContent = "Votre demande est prête. WhatsApp va s’ouvrir pour vous permettre de vérifier puis d’envoyer le message. Le rendez-vous ne sera confirmé qu’après validation par la salle.";
      status.className = "form-status success";
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();