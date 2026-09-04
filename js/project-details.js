function showProject(projectId) {
  const project = projects[projectId];

  if (!project) {
    console.error("Project not found:", projectId);
    return;
  }

  const modal = document.getElementById("projectModal");
  const title = document.getElementById("modalTitle");
  const category = document.getElementById("modalCategory");
  const body = document.getElementById("modalBody");

  title.textContent = project.title;
  category.textContent = project.category || "AI Project";
  body.innerHTML = project.description;

  modal.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("projectModal");
  const closeButton = document.querySelector(".project-close");

  if (!modal || !closeButton) {
    console.error("Project modal elements not found.");
    return;
  }

  // Move modal directly under body
  document.body.appendChild(modal);

  // Close button
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close with ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
