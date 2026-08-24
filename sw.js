self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Offline သုံးရန် ထပ်မံရေးသားနိုင်ပါသည်။ ယခုလောလောဆယ် ကျော်ဖြတ်ထားပါသည်။
});
