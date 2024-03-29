
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register('service-worker.js')
      .then((registration) => {
          console.log('Service Worker 登録成功:', registration);
      })
      .catch((error) => {
          console.log('Service Worker 登録失敗:', error);
      });
}

document.addEventListener('DOMContentLoaded', function() {
  const incrementBtn = document.getElementById('increment');
  const counter = document.getElementById('counter');

  const storageKey = 'count';
  let count = localStorage.getItem(storageKey) || 0;
  counter.textContent = count;

  incrementBtn.addEventListener('click', function() {
      var gifContainer = document.getElementById('gifContainer');
      gifContainer.style.display = 'block'; // GIFコンテナを表示
      setTimeout(function() {
        gifContainer.style.display = 'none'; // 10秒後に非表示
      }, 4500); // 10000ミリ秒 = 10秒
      count++;
      updateCounter();
  });

  function updateCounter() {
      counter.textContent = count;
      localStorage.setItem(storageKey, count);
  }
});