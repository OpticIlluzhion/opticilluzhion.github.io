fetch('navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
})
.catch(error => console.error('Error loading the navbar:', error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
})
.catch(error => console.error('Error loading the footer:', error));