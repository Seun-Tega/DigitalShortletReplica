document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.page-link');
    let currentPage = 1;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');

            if (page === 'next') {
                currentPage += 1;
            } else if (page === 'last') {
                currentPage = 30;  // assuming 30 is the last page
            } else {
                currentPage = parseInt(page);
            }

            loadPage(currentPage);
        });
    });

    function loadPage(page) {
        // Clear existing content
        const content = document.getElementById('content');
        content.innerHTML = '';

        // Load new content (this is just a placeholder, replace with actual data loading)
        content.innerHTML = `<p>Content for page ${page}</p>`;

        // Update active page link
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') == page) {
                link.classList.add('active');
            }
        });
    }

    // Load initial page
    loadPage(currentPage);
});