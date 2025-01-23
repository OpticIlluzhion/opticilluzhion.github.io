
fetch('/navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
})
.catch(error => console.error('Error loading the navbar:', error));

fetch('/footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Error loading the footer:', error));

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookieBannerDismissed')) {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <div id="cookie-banner">
        <div id="cookie-content">
          <h2>This is not a cookie banner nor an ad blocker pop-up</h2>
          <hr>
          <p>I'm not interested in tracking you, nor in serving you ads and selling your data, nor in guilt tripping you into disabling your ad blocker or donating or paying yet another subscription. Feel free to enjoy the website in peace!</p>
          <button id="dismiss-button">This was very unnecessary but ok thanks I guess...</button>
        </div>
    </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('dismiss-button').addEventListener('click', () => {
      banner.remove();
      localStorage.setItem('cookieBannerDismissed', 'true');
    });
  }
});