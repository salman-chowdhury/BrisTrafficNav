const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    projects.forEach((project) => {
      const categories = project.dataset.category?.split(' ') ?? [];
      project.hidden = filter !== 'all' && !categories.includes(filter);
    });
  });
});
