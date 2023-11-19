// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika yang hamburger di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik selain hamburger untuk menghilangkan nav //
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

//Slide

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// JavaScript untuk menangani formulir registrasi
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai formulir
    const name = document.getElementById("name").value;
    const nim = document.getElementById("nim").value;
    const phone = document.getElementById("phone").value;
    const emailReg = document.getElementById("emailReg").value;
    const passwordReg = document.getElementById("passwordReg").value;

    // Lakukan sesuatu dengan data formulir, misalnya, kirim ke server
    console.log("Data Registrasi:", {
      name,
      nim,
      phone,
      emailReg,
      passwordReg,
    });
  });

//galery//

document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery-container");

  // Daftar nama foto (sesuaikan dengan nama foto Anda)
  const photoNames = [
    "Piket-FAH-1.jpeg",
    "Piket-FAH-2.jpeg",
    "Piket-FAH-3.jpeg",
    "Piket-FAH-4.jpeg",
    "Piket-FAH-5.jpeg",
    "Piket-FAH-6.jpeg",
    "Piket-FAH-7.jpeg",
    "Piket-FAH-8.jpeg",
  ];

  // Loop untuk menambahkan setiap foto ke dalam container
  photoNames.forEach((photoName) => {
    const imgElement = document.createElement("img");
    imgElement.src = `css/${photoName}`;
    imgElement.alt = photoName;
    galleryContainer.appendChild(imgElement);
  });
});
