document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trip-form");
  const responseMessage = document.querySelector(".form-messages");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());

    const response = await fetch(
      "https://my-app.md-142.workers.dev/api/v1/home",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      }
    );

    const result = await response.json();

    responseMessage.textContent =
      "Thanks for reaching out! We will get back to you soon";
    responseMessage.style.color = "green";
    form.reset();

    // Display response message and hide after 3 seconds
    responseMessage.style.display = "block";
    setTimeout(() => {
      responseMessage.style.display = "none";
    }, 3000);
  });
});
