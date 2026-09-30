import { projects } from './projects-data.js';

const galleryDialog = document.querySelector('#project-gallery-dialog');
const galleryTitle = galleryDialog?.querySelector('.project-gallery__title');
const galleryLocation = galleryDialog?.querySelector('.project-gallery__location');
const galleryImage = galleryDialog?.querySelector('.project-gallery__image');
const galleryCounter = galleryDialog?.querySelector('.project-gallery__counter');
const galleryClose = galleryDialog?.querySelector('.project-gallery__close');
const galleryPrevious = galleryDialog?.querySelector('.project-gallery__previous');
const galleryNext = galleryDialog?.querySelector('.project-gallery__next');

let activeProject = null;
let activeImageIndex = 0;
let activeTrigger = null;

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
  } else {
    const actions = document.createElement('div');
    actions.className = 'project-card__actions';

    const button = document.createElement('button');
    button.className = 'project-action';
    button.type = 'button';
    button.textContent = `Ver fotos · ${project.images.length}`;
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'project-gallery-dialog');
    button.setAttribute('aria-label', `Ver fotos de ${project.title} en ${project.location}`);
    button.addEventListener('click', () => openProjectGallery(project, button));

    actions.append(button);
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

function preloadAdjacentImages() {
  for (const index of [activeImageIndex - 1, activeImageIndex + 1]) {
    const fileName = activeProject.images[index];
    if (!fileName) continue;

    const image = new Image();
    image.src = getProjectImageUrl(activeProject, fileName);
  }
}

function showGalleryImage(index) {
  if (!activeProject || index < 0 || index >= activeProject.images.length) return;

  activeImageIndex = index;
  const total = activeProject.images.length;
  galleryImage.src = getProjectImageUrl(activeProject, activeProject.images[index]);
  galleryImage.alt = `${activeProject.title} en ${activeProject.location} — foto ${index + 1} de ${total}`;
  galleryCounter.textContent = `${index + 1} / ${total}`;

  const focusedControl = document.activeElement;
  galleryPrevious.disabled = index === 0;
  galleryNext.disabled = index === total - 1;

  // Mantiene el teclado dentro de la galería si el control enfocado se deshabilita.
  if (focusedControl === galleryPrevious && galleryPrevious.disabled) {
    galleryNext.focus({ preventScroll: true });
  } else if (focusedControl === galleryNext && galleryNext.disabled) {
    galleryPrevious.focus({ preventScroll: true });
  }

  preloadAdjacentImages();
}

function openProjectGallery(project, trigger) {
  if (!galleryDialog || !project.images.length) return;

  activeProject = project;
  activeTrigger = trigger;
  activeImageIndex = 0;
  galleryTitle.textContent = project.title;
  galleryLocation.textContent = project.location;
  showGalleryImage(activeImageIndex);
  galleryDialog.showModal();
  document.body.classList.add('is-project-gallery-open');
  galleryClose.focus({ preventScroll: true });
}

if (galleryDialog) {
  galleryPrevious.addEventListener('click', () => showGalleryImage(activeImageIndex - 1));
  galleryNext.addEventListener('click', () => showGalleryImage(activeImageIndex + 1));
  galleryClose.addEventListener('click', () => galleryDialog.close());

  galleryDialog.addEventListener('keydown', (event) => {
    if (!activeProject) return;

    if (event.key === 'ArrowLeft' && activeImageIndex > 0) {
      event.preventDefault();
      showGalleryImage(activeImageIndex - 1);
    } else if (event.key === 'ArrowRight' && activeImageIndex < activeProject.images.length - 1) {
      event.preventDefault();
      showGalleryImage(activeImageIndex + 1);
    }
  });

  galleryDialog.addEventListener('click', (event) => {
    if (event.target === galleryDialog) galleryDialog.close();
  });

  // Escape nativo, botón de cierre y backdrop comparten la misma limpieza.
  galleryDialog.addEventListener('close', () => {
    document.body.classList.remove('is-project-gallery-open');
    if (activeTrigger?.isConnected) activeTrigger.focus({ preventScroll: true });
    activeProject = null;
    activeImageIndex = 0;
    activeTrigger = null;
  });
}
