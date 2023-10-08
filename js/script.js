const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function handleGetFormData() {
  var formData = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };
  return formData;
}

function isNumber(str) {
  for (var i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  var statusCheckbox = document.getElementById("status");
  if (statusCheckbox.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(formData) {
  if (
    formData != null &&
    typeof formData.zipCode === "number" &&
    document.getElementById("status").checked
  ) {
    return true;
  } else {
    return false;
  }
}

function submit() {
  event.preventDefault();
  if (!validateFormData(handleGetFormData())) {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").textContent = "";
  }
}

document.querySelector("form").addEventListener("submit", submit);