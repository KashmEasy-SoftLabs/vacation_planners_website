document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const responseMessage = document.querySelector(".form-messages"); // Update to target the correct element

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://my-app.md-142.workers.dev/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        responseMessage.textContent = result.message;
        responseMessage.style.color = "green";
        form.reset();
      } else {
        responseMessage.textContent = `Error: ${result.message}`;
        responseMessage.style.color = "red";
      }
    } catch (error) {
      responseMessage.textContent = `Error: ${error.message}`;
      responseMessage.style.color = "red";
    }

    // Display response message and hide after 3 seconds
    responseMessage.style.display = "block";
    setTimeout(() => {
      responseMessage.style.display = "none";
    }, 3000);
  });
});
