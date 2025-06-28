const params = new URLSearchParams(window.location.search);
document.querySelector('#task-title').innerText =
  `${params.get('project') || 'Untitled Project'} - ${params.get('task') || 'Untitled Task'}`;
