document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const queryMessage = document.getElementById("query-message");
  const popupForm = document.getElementById("popup-form");
  const popupMessage = document.getElementById("popup-message");
  const carForm = document.getElementById("car-form");
  const cabMessage = document.getElementById("cab-message");
  const packageForm = document.getElementById("package-form");
  const packageMessage = document.getElementById("package-message");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    const response = await fetch(
      "https://vacation_planners_backend.md-142.workers.dev/api/v1/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      }
    );
    form.style.opacity = "0.4";
    queryMessage.innerHTML =
      "Thanks for reaching out. We will get back to you soon.";
    setTimeout(() => {
      queryMessage.innerHTML = "";
      form.style.opacity = "1";
    }, 3000);
  });

  popupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(popupForm);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    const response = await fetch(
      "https://vacation_planners_backend.md-142.workers.dev/api/v1/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      }
    );
    popupForm.style.opacity = "0.4";
    popupMessage.innerHTML =
      "Thanks for reaching out. We will get back to you soon.";
    setTimeout(() => {
      popupMessage.innerHTML = "";
      popupForm.style.opacity = "1";
    }, 3000);
  });

  carForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(carForm);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
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
    carForm.style.opacity = "0.4";
    cabMessage.innerHTML =
      "Thanks for reaching out. We will get back to you soon.";
    setTimeout(() => {
      cabMessage.innerHTML = "";
      carForm.style.opacity = "1";
    }, 3000);
  });

  packageForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(packageForm);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    const response = await fetch(
      "https://vacation_planners_backend.md-142.workers.dev/api/v1/packages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      }
    );
    packageForm.style.opacity = "0.4";
    packageMessage.innerHTML =
      "Thanks for reaching out. We will get back to you soon.";
    setTimeout(() => {
      packageMessage.innerHTML = "";
      packageForm.style.opacity = "1";
    }, 3000);
  });
});
