chrome.runtime.onInstalled.addListener(() => {
  console.log('MindMosaic extension installed');
  chrome.alarms.create('refreshGlossary', { periodInMinutes: 1440 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'refreshGlossary') {
    console.log('Would fetch glossary here');
  }
});
