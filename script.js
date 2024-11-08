// JavaScript for search functionality
function filterApps() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const appCards = document.querySelectorAll(".app-card");

    appCards.forEach(card => {
        const appName = card.getAttribute("data-name").toLowerCase();
        if (appName.includes(searchInput)) {
            card.style.display = "block";  // Show matching app cards
        } else {
            card.style.display = "none";   // Hide non-matching app cards
        }
    });
}
