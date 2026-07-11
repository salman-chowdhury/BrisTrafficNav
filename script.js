const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    projects.forEach((project) => {
      const categories = project.dataset.category?.split(' ') ?? [];
      project.hidden = filter !== 'all' && !categories.includes(filter);
    });
  });
});
