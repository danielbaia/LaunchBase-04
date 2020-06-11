const currentPage = location.pathname;
const items = document.querySelectorAll(".header-menu ul li a");

for (const item of items) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active");
    }
}