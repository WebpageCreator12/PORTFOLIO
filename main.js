/**
         * Initializes the Single Page Application by setting the initial page
         * and handling navigation based on the URL hash.
         */
        document.addEventListener('DOMContentLoaded', () => {
            // Function to set the initial page based on the URL hash
            const initialPageId = window.location.hash.substring(1) || 'home';
            showPage(initialPageId);
        });

        /**
         * Shows the requested page section and updates the navigation links.
         * @param {string} pageId - The ID of the section to show (e.g., 'home', 'projects').
         */
        function showPage(pageId) {
            // 1. Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.remove('active');
            });

            // 2. Show the requested page
            const activePage = document.getElementById(pageId);
            if (activePage) {
                activePage.classList.add('active');
                // Optional: Update URL hash for sharing/back button
                window.history.pushState(null, null, `#${pageId}`);
            }

            // 3. Update active navigation link styling
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active-link');
            });

            const activeLink = document.querySelector(`nav a[data-page="${pageId}"]`);
            if (activeLink) {
                activeLink.classList.add('active-link');
            }
        }

        /**
         * Handles the contact form submission. (Prevents actual submission
         * in this static example, shows a confirmation message instead).
         * @param {Event} event - The form submission event.
         */
        function handleFormSubmit(event) {
            event.preventDefault();
            // Note: In a real environment, you would use fetch() here
            // to send data to a backend endpoint (like Firebase or an API).
            
            const form = event.target;
            const submitButton = form.querySelector('.cta-button');

            // Simulate form submission process
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                // Display confirmation message instead of an alert()
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Message Sent! I will be in touch soon.';
                successMessage.style.color = 'var(--color-accent)';
                successMessage.style.marginTop = '20px';
                successMessage.style.fontWeight = 'bold';
                successMessage.style.fontSize = '1.2em';

                form.innerHTML = ''; // Clear the form content
                form.appendChild(successMessage);
            }, 1500);
        }