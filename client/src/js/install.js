const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // Save the event for later use
  window.deferredPrompt = event;

  // Show the install button
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // Display the prompt
  promptEvent.prompt();

  // Clear the saved prompt event
  window.deferredPrompt = null;

  // Hide the install button
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear the saved prompt event
  window.deferredPrompt = null;
});