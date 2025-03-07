document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax Effect
    const parallaxSection = document.querySelector('.parallax');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        parallaxSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Dynamic content loading (example)
    const featuresSection = document.querySelector('.features');
    const features = [
        { title: 'Dynamic Animations', description: 'Engage your audience with cutting-edge animations.' },
        { title: 'Responsive Design', description: 'Seamless experience across all devices.' },
        { title: 'Interactive Elements', description: 'Interactive features that captivate and inspire.' }
    ];

    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.classList.add('feature');
        featureDiv.innerHTML = `
            <h2>${feature.title}</h2>
            <p>${feature.description}</p>
        `;
        featuresSection.appendChild(featureDiv);
    });
});
