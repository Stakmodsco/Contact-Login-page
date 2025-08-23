const checkbox = document.getElementById('reg-log');
const tabs = document.querySelectorAll('.right h6 span');

function updateTab() {
  if (checkbox.checked) {
    tabs[0].style.backgroundColor = 'rgba(234, 66, 39, 0.5)'; // Log In dim
    tabs[0].style.boxShadow = '0px 8px 24px 0 rgba(228, 10, 57, .2)'; // default shadow

    tabs[1].style.backgroundColor = '#EA4227';                 // Sign Up bright
    tabs[1].style.boxShadow = '0 8px 24px 0 rgba(138, 140, 146, .2)'; // match .btn hover shadow
  } else {
    tabs[0].style.backgroundColor = '#EA4227';                 // Log In bright
    tabs[0].style.boxShadow = '0 8px 24px 0 rgba(138, 140, 146, .2)'; // match .btn hover shadow

    tabs[1].style.backgroundColor = 'rgba(234, 66, 39, 0.5)'; // Sign Up dim
    tabs[1].style.boxShadow = '0px 8px 24px 0 rgba(228, 10, 57, .2)'; // default shadow
  }
}

updateTab();
checkbox.addEventListener('change', updateTab);