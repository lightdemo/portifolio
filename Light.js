window.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    let message = '';
  
    if (hour < 12) {
      message = 'Good morning!';
    } else if (hour < 18) {
      message = 'Good afternoon!';
    } else {
      message = 'Good evening!';
    }
  
    greeting.textContent = message;
  });
function showMessage(){
    alert('Hello everyone!');
}
showMessage();
let userName = 'Hello everyone!';

function showMessage() {
  let userName = "Bob"; 


}

showMessage();

alert( userName ); 
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // 
  }
  
  function sayBye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayBye);
function validate(){
    const nameInput = document.getElementById("name").value;

    if (nameInput.trim() == '') {
        alert("username and email can not be empty");
        return false;
    }
    alert("form is valid");
}  

window.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  let greeting = 'Welcome!';
  if (hour < 12) greeting = 'Good morning!';
  else if (hour < 18) greeting = 'Good afternoon!';
  else greeting = 'Good evening!';
  console.log(greeting); 
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});


  
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
      }

      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        e.preventDefault();
      }
    });
  };

// Form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^\d{10}$/;

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        e.preventDefault();
      }

      if (!phonePattern.test(phone)) {
        alert("Please enter a 10-digit phone number.");
        e.preventDefault();
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
      const details = this.nextElementSibling;
      if (details.style.display === "none") {
        details.style.display = "block";
        this.textContent = "Hide Details";
      } else {
        details.style.display = "none";
        this.textContent = "Details";
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
  });
});
