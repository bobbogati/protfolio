const revealProjectButton = document.getElementById("revealProjectButton");
const projectDetails = document.getElementById("projectDetails");

revealProjectButton.addEventListener("click", () => {
    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
        revealProjectButton.textContent = "Hide Project Details";
    } else {
        projectDetails.style.display = "none";
        revealProjectButton.textContent = "Show Project Details";
    }
});
