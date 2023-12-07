// footer.js
document.addEventListener('DOMContentLoaded', function () {
const footerContainer = document.getElementById('footer-container');

fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        footerContainer.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });
});
/*fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        footerContainer.innerHTML = data;
    });*/
