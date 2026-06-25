const formSubmit = document.querySelector(".formSubmit");

if (formSubmit) {
  const formStatus = formSubmit.querySelector(".form-status");
  const nextUrlField = formSubmit.querySelector("#form-next-url");

  if (nextUrlField) {
    const returnUrl = new URL(window.location.href);
    returnUrl.searchParams.set("sent", "1");
    returnUrl.hash = "connectMe";
    nextUrlField.value = returnUrl.toString();
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1" && formStatus) {
    formStatus.textContent = "Message sent successfully. I will get back to you soon.";
    formStatus.classList.add("is-visible");
  }

  formSubmit.addEventListener("submit", (e) => {
    const requiredFields = formSubmit.querySelectorAll("input[required], textarea[required]");

    for (const field of requiredFields) {
      if (!field.value || field.value.trim() === "") {
        e.preventDefault();
        alert("Please fill all required fields before sending your message.");
        field.focus();
        return;
      }
    }
  });
}
