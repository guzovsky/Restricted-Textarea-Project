// Select all textarea wrapper elements
document.querySelectorAll(".textarea-wrapper").forEach(wrapper => {
    const textarea = wrapper.querySelector("textarea"); // The actual input area
    const counter = wrapper.querySelector(".char-counter"); // Counter display element
    const maxLength = Number(textarea.getAttribute("maxlength")); // Max character limit
  
    // Function to auto-resize the textarea based on content
    const autoResize = () => {
      textarea.style.height = "auto"; // Reset height to shrink if needed
      textarea.style.height = textarea.scrollHeight + "px"; // Expand to fit content
    };
  
    // Event listener: Updates on every keystroke
    textarea.addEventListener("input", () => {
      const currentLength = textarea.value.length;
      counter.textContent = `${currentLength} / ${maxLength}`; // Update character count
  
      // Add red border if limit reached, otherwise remove it
      textarea.classList.toggle("limit-reached", currentLength >= maxLength);
  
      // Adjust height dynamically
      autoResize();
    });
  
    // Ensure the height is correct on page load (in case of pre-filled content)
    autoResize();
  });
  