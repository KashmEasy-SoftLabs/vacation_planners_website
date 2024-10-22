document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("bookingModal");
  const buttons = document.querySelectorAll(".bookNowBtn"); // Select all buttons
  const span = document.getElementsByClassName("close")[0];
  const carNameInput = document.getElementById("carName");
  const body = document.body; // Reference to the body element
  const carForm = document.getElementById("bookingForm");
  const cabMessage = document.querySelector(".form-messages"); // Ensure this class exists

  // Add click event to each button
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const carName = btn.getAttribute("data-car-name");
      carNameInput.value = carName; // Set the car name in the input
      modal.style.display = "block"; // Show the modal
      body.classList.add("blurred"); // Add blur effect
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
    body.classList.remove("blurred"); // Remove blur effect
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      body.classList.remove("blurred"); // Remove blur effect
    }
  };

  carForm.onsubmit = async function (event) {
    event.preventDefault();

    const formData = new FormData(carForm);
    const jsonData = Object.fromEntries(formData.entries());
    jsonData.car = carNameInput.value; // Ensure the car name is included

    try {
      const response = await fetch(
        "https://vacation_planners_backend.md-142.workers.dev/api/v1/cab",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result); // Log the response for debugging

      // Show success message
      cabMessage.innerHTML =
        "Thanks for reaching out. We will get back to you soon.";
      carForm.style.opacity = "0.4";

      // Reset the form after a delay
      setTimeout(() => {
        cabMessage.innerHTML = "";
        carForm.reset(); // Clear the form fields
        carForm.style.opacity = "1";
        modal.style.display = "none"; // Close modal on success
        body.classList.remove("blurred"); // Remove blur effect
      }, 3000);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      cabMessage.innerHTML =
        "Oops! An error occurred and your message could not be sent.";
      carForm.style.opacity = "1"; // Restore opacity if there's an error
    }
  };
});
