function showProject(projectId) {
  const project = projects[projectId];

  document.getElementById("modalTitle").innerHTML = project.title;

  document.getElementById("modalBody").innerHTML = project.description;

  document.getElementById("projectModal").style.display = "flex";
}

document.querySelector(".project-close").addEventListener("click", () => {
  document.getElementById("projectModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("projectModal");

  if (e.target === modal) {
    modal.style.display = "none";
  }
});
