document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('mode');
  chrome.storage.local.get('mode', ({ mode = 'Research' }) => {
    select.value = mode;
  });
  select.addEventListener('change', () => {
    chrome.storage.local.set({ mode: select.value });
  });
});
