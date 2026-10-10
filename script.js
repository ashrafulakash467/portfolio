const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const scrollTopBtn = document.getElementById("scrollTop");
const year = document.getElementById("year");
const certificateModal = document.getElementById("certificateModal");
const openCertificateBtn = document.getElementById("openCertificate");
const closeCertificateBtn = document.getElementById("closeCertificate");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(navLinks.classList.contains("show")));
  const icon = menuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    const icon = menuBtn.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("show", window.scrollY > 450);

  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      });
    }
  });
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (certificateModal && openCertificateBtn && closeCertificateBtn) {
  openCertificateBtn.addEventListener("click", () => {
    certificateModal.showModal();
    document.body.classList.add("modal-open");
  });

  closeCertificateBtn.addEventListener("click", () => {
    certificateModal.close();
  });

  certificateModal.addEventListener("click", (event) => {
    if (event.target === certificateModal) certificateModal.close();
  });

  certificateModal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    openCertificateBtn.focus();
  });
}
