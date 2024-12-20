document.addEventListener('DOMContentLoaded', () => {
    const yearButtons = document.querySelectorAll('.year-button');
    const yearContents = document.querySelectorAll('.year-content');

    // Function to switch active year
    const switchYear = (year) => {
        yearButtons.forEach((button) => {
            button.classList.toggle('active', button.dataset.year === year);
        });

        yearContents.forEach((content) => {
            content.classList.toggle('active', content.id === `year-${year}`);
        });
    };

    // Added event listeners to year buttons
    yearButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const year = button.dataset.year;
            switchYear(year);
        });
    });

    // Default to the first year (2024)
    switchYear('2024');
    
    // To handle youtube video play
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoWrapper = button.closest('.video-thumbnail-wrapper');  // Get the closest video thumbnail wrapper
            const videoEmbed = videoWrapper.nextElementSibling;  // Find the video embed section (the <div> that holds the iframe)
    
            // Show the embedded video
            videoEmbed.style.display = 'block';
    
            // Hide the thumbnail and play button
            videoWrapper.style.display = 'none';
        });
    });
});
