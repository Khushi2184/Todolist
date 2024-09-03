// Dropdown Menu Toggle
const dropdownToggle = document.querySelector('.dropdown-toggle');
const navLinks = document.querySelector('.nav-links');

dropdownToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Modal Functions
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close Modal When Clicking Outside Content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
