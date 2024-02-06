const square = document.querySelector(".square");
const introName = document.querySelector(".intro-name");
const introSurname = document.querySelector(".intro-surname");
const squareHome = document.querySelector(".square-home");
const homepage = document.querySelector(".homepage");
const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');

if (!hasAnimationPlayed) {
  let tl = gsap.timeline();
  gsap.to(".center", { opacity: 1, duration: 0 });
  tl.fromTo(square, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    .fromTo(introName, { opacity: 1 }, { opacity: 0, duration: 0.7 }, "+=1.1")
    .fromTo(introSurname, { opacity: 1 }, { opacity: 0, duration: 0.7 }, "<") // Start when the previous tween begins.
    .to(square, {
      duration: 1, // Animation duration in seconds
      width: 'calc(100vw - 2 * var(--pad))',
      height: 'calc(100vh - 2 * var(--pad))',
      ease: 'power4.inOut'
    }, "-=0.4")
    .to(".homepage", { opacity: 1, duration: 0.7 })
    .fromTo(square, { opacity: 1 }, { opacity: 0, duration: 1 }, "<")
    .eventCallback('onComplete', () => {
      // Set a flag in session storage indicating that the animation has played
      sessionStorage.setItem('animationPlayed', true);
    });
} else {
  // Add the homepage class if the animation has played before
  gsap.to(".homepage", { opacity: 1, duration: 0 });
}

$(document).ready(function () {
  const siteHeaderNav = $('.siteHeader_nav');
  const pageContainer = $('.page');

  siteHeaderNav.on('click', 'a', function (e) {
    e.preventDefault();
    const page = $(this).data('page');
    loadPage(page);
    const path = page === 'home' ? '/' : '/' + page;
    history.pushState(null, null, path); // Update the URL
  });

  window.onpopstate = function () {
    const page = window.location.pathname.replace('/', '');
    loadPage(page);
  };

  function loadPage(page) {
    
    page = page || 'home';
    const url = page === 'home' ? './index.html' : `./pages/${page}.html`;

    $.ajax({
      url: url,
      method: 'GET',
      success: function (data) {
        const tl = gsap.timeline();
        tl.to(pageContainer, { opacity: 0, duration: 0.5, onComplete: updateAndReplace })
          .to(pageContainer, { opacity: 1, duration: 0.5 });
        function updateAndReplace() {
          setTimeout(updateAge, 10);
          pageContainer.html($(data).find('.page').html());
          siteHeaderNav.find('a').removeClass('active');
          siteHeaderNav.find(`a[data-page="${page}"]`).addClass('active');
        }
      },
    });
  }

  const initialPage = window.location.pathname.replace('/', '');
  loadPage(initialPage);
});

  function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
  
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Adjust age if birthday hasn't occurred yet this year
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  
  // Function to update the age in the HTML
  function updateAge() {
    // Check if the element with ID 'ageSpan' exists
    const ageSpanElement = document.getElementById('ageSpan');

    if (ageSpanElement) {
      const birthdate = '2000-05-30';
      const age = calculateAge(birthdate);

      // Update the content of the span with the calculated age
      ageSpanElement.textContent = "A " + age + " y/o developer";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    updateAge();
  });

  // Assuming you have an <a> element with class "_text" and data-page attribute set to "home"
const homeLink = document.querySelector('a._text[data-page="home"]');

homeLink.addEventListener('click', function(event) {
  // Prevent the default behavior of the link (e.g., preventing navigation)
  event.preventDefault();

  // Call the updateAge function after a short delay
  setTimeout(function() {
      updateAge();
      // Optionally, you can perform other actions related to navigating to the home page here
  }, 10); // Adjust the delay as needed
});

const timeDiv = document.querySelector('.utc-time');

function myTimeFunction() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US');
  timeDiv.innerHTML = timeStr;
}
setInterval(myTimeFunction, 1000);


  document.addEventListener('DOMContentLoaded', function () {
    // Get the switch element and the checkbox
    var switchElement = document.querySelector('.switch');
    var checkbox = switchElement.querySelector('input[type="checkbox"]');

    // Get the theme color elements
    var darkTheme = document.querySelector('.theme_color._dark');
    var lightTheme = document.querySelector('.theme_color._light');

    // Function to update background color
    function updateBackgroundColor() {
      var bgColor = checkbox.checked ? '#E5E5E5' : '#0D0D0D';

      // Use GSAP to animate background color change
      gsap.to('body', { backgroundColor: bgColor, duration: 0.7 });
    }

    // Function to toggle the switch state
    function toggleSwitch() {
      checkbox.checked = !checkbox.checked;
      updateBackgroundColor();
    }

    // Event listeners for dark and light theme clicks
    darkTheme.addEventListener('click', function () {
      toggleSwitch();
    });

    lightTheme.addEventListener('click', function () {
      toggleSwitch();
    });

    // Event listener for switch toggle
    switchElement.addEventListener('click', function () {
      toggleSwitch();
    });
  });