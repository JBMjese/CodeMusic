
const applicationsLink = document.getElementById('applications');
const playlistsLink = document.getElementById('playlists');
const resourcesLink = document.getElementById('resources');

const applicationsContent = document.getElementById('applications');
const playlistsContent = document.getElementById('playlists');
const resourcesContent = document.getElementById('resources');

applicationsLink.addEventListener('click', () => {
  applicationsContent.classList.toggle('visible');
});

playlistsLink.addEventListener('click', () => {
  playlistsContent.classList.toggle('visible');
});

resourcesLink.addEventListener('click', () => {
  resourcesContent.classList.toggle('visible');
});
