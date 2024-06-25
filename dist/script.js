document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is fully in viewport
    function isFullyInViewport(element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        return (
            rect.top <= 0 &&
            rect.left >= 0 &&
            rect.bottom >= viewportHeight &&
            rect.right <= viewportWidth
        );
    }
  


    // Add event listener for scroll
    document.addEventListener('scroll', function() {
        const sections = ['intro', 'about', 'experience', 'tools', 'project']; // IDs of all sections

        sections.forEach(sectionId => {
            const targetSection = document.getElementById(sectionId); // Select each section by its ID
            const headerButton = document.querySelector(`.header-button[data-target="#${sectionId}"]`); // Select corresponding header button
            
            const element = document.getElementById('projects'); // Replace with your element ID
            //console.log(sectionId,isFullyInViewport(element));

            if (targetSection && isFullyInViewport(targetSection)) {
                if (headerButton) {
                    headerButton.style.display = 'none'; // Hide the button if the section is fully in viewport
                }
            } else {
                if (headerButton) {
                    headerButton.style.display = 'inline-flex'; // Show the button if the section is not fully in viewport
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Select all links with the class 'header-button'
    const links = document.querySelectorAll('header a.header-button');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section ID from the 'href' attribute
            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate the offset top of the target section
                const offsetTop = targetSection.offsetTop;

                // Scroll smoothly to the target section
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

const texts = ["Web Developer", "ML Engineer","Code Competitor"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('domain').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => {
            document.getElementById('domain').textContent = '';
            setTimeout(type, 500); // wait before typing the next word
        }, 2000); // wait before erasing
    } else {
        setTimeout(type, 100);
    }
}());


//--------------------------------Project cards----------------------------------------------

function showAll() {
    // Show all cards
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('active');
    });
}

function showWebD() {
    // Show only Web-D cards, hide others
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // Add 'active' class to all Web-D cards
    document.querySelectorAll('#card-web-d').forEach(card => {
        card.classList.add('active');
    });
}

function showML() {
    // Show only ML cards, hide others
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // Add 'active' class to all ML cards
    document.querySelectorAll('#card-ml').forEach(card => {
        card.classList.add('active');
    });
}
function showOthers() {
    // Show only ML cards, hide others
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('active');
    });

    // Add 'active' class to all ML cards
    document.querySelectorAll('#card-others').forEach(card => {
        card.classList.add('active');
    });
}



// ----------Email-------------------------------
