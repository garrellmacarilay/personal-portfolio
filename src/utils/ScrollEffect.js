export function addScrollEffect() {
  const mainContent = document.querySelector('.main-content');

  if (!mainContent) return;

  let isScrolling;

  window.addEventListener('scroll', () => {
    mainContent.classList.add('scrolling');

    // Clear the timeout if the user is still scrolling
    clearTimeout(isScrolling);

    // Remove the class after scrolling stops
    isScrolling = setTimeout(() => {
      mainContent.classList.remove('scrolling');
    }, 300); // Adjust delay as needed
  });
}
