// Função para alternar a exibição dos detalhes dos projetos
function toggleProjectDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    
    // Alterna a visibilidade do projeto
    if (projectDetails.style.display === "block") {
      projectDetails.style.display = "none";
    } else {
      projectDetails.style.display = "block";
    }
  }
  