document.addEventListener('DOMContentLoaded', function() {
    // Verify if current page visited by user is index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        // Verify variable exists
        if (localStorage.getItem('unitepawvisit')) {
            // Increase by one unit
            let visitCount = parseInt(localStorage.getItem('unitepawvisit'));
            visitCount += 1;
            localStorage.setItem('unitepawvisit', visitCount);
        } else {
            // Define the new variable into 1
            localStorage.setItem('unitepawvisit', 1);
        }

        // Get current value of unitedpawvisit
        let currentVisitCount = localStorage.getItem('unitepawvisit');

        // Print this value into footer
        let visitQtyElement = document.getElementById('visitQty');
        if (visitQtyElement) {
            visitQtyElement.textContent = `You visited ${currentVisitCount} time/s`;
        }
    }
});
