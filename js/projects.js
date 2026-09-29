import { projects } from './projects-data.js';

function getProjectImageUrl(project, fileName) {
  return new URL(`../images/projects/${project.folder}/${fileName}`, import.meta.url).href;
}

function getProjectUrl(project) {
  const url = new URL('../proyectos/index.html', import.meta.url);
  url.hash = project.id;
  return url.href;
}

function createProjectCard(project, isHome) {
  const article = document.createElement('article');
  article.className = 'project-card';
  article.dataset.projectId = project.id;

  if (!isHome) article.id = project.id;

  const image = document.createElement('img');
  image.className = 'project-card__image';
  image.src = getProjectImageUrl(project, project.cover);
  image.alt = `${project.title} en ${project.location}`;
  image.loading = 'lazy';

  const content = document.createElement('div');
  content.className = 'project-card__content';

  const title = document.createElement('h3');
  title.className = 'project-card__title';
  title.textContent = project.title;

  const location = document.createElement('p');
  location.className = 'project-card__location';
  location.textContent = project.location;
  content.append(title, location);

  if (isHome) {
    const actions = document.createElement('div');
    actions.className = 'project-card__actions';

    const link = document.createElement('a');
    link.className = 'project-action project-action--navigate';
    link.href = getProjectUrl(project);
    link.textContent = 'Ver proyecto';
    link.setAttribute('aria-label', `Ver proyecto: ${project.title} en ${project.location}`);

    actions.append(link);
    content.append(actions);
  }

  article.append(image, content);
  return article;
}

// Una misma estructura sirve para la selección de Inicio y el listado completo.
document.querySelectorAll('[data-projects]').forEach((container) => {
  const isHome = container.dataset.projects === 'home';
  const visibleProjects = isHome ? projects.filter((project) => project.showOnHome === true) : projects;
  container.replaceChildren(...visibleProjects.map((project) => createProjectCard(project, isHome)));
});

const projectsList = document.querySelector('[data-projects="all"]');

function scrollToProject() {
  let projectId;

  try {
    projectId = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }

  const project = Array.from(projectsList.children).find((card) => card.dataset.projectId === projectId);
  if (!project) return;

  // Espera al renderizado y posiciona sin animación ni cambio de foco.
  requestAnimationFrame(() => {
    project.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
}

if (projectsList) {
  scrollToProject();
  window.addEventListener('hashchange', scrollToProject);
}
