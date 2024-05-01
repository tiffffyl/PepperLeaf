fetch('/includes/navigation-bar.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('header').innerHTML = html;
                
});

fetch('/includes/footer.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('footer').innerHTML = html;
                
});