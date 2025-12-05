// Key 
var eventKey = localStorage.getItem("eventKey") || "`";
var panicLink = localStorage.getItem("panicLink") || "https://classroom.google.com/";

document.addEventListener("keydown", function(event) {
  if (event.key === eventKey) {
    if (window.self !== window.top) {
      window.parent.location.href = panicLink;
    } else {
      window.location.href = panicLink;
    }
  }
});

var eventKeyInput = document.getElementById("eventKeyInput");
if (eventKeyInput) {
  eventKeyInput.addEventListener("input", function() {
    eventKey = eventKeyInput.value;
  });
}

var linkInput = document.getElementById("linkInput");
if (linkInput) {
  linkInput.addEventListener("input", function() {
    panicLink = linkInput.value;
  });
}

function saveEventKey() {
  var eventKeyInput = document.getElementById("eventKeyInput");
  if (eventKeyInput) {
    eventKey = eventKeyInput.value;
    localStorage.setItem("eventKey", eventKey);
    localStorage.setItem("panicLink", panicLink);
  }
}

// Tab Cloaker
function saveName() {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
}

function saveIcon() {
  const icon = document.getElementById("icon").value;
  localStorage.setItem("icon", icon);
}

// Function to update favicon and title based on selected option
function updateHeadSection(selectedValue) {
    const icon = document.getElementById('dynamic-favicon');
    const name = document.getElementById('dynamic-title');
    
    if (selectedValue === 'Google') {
        icon.setAttribute('href', '/images/favicon/google.png');
        name.textContent = 'Google';
        localStorage.setItem("name", "Google");
        localStorage.setItem("icon", "/images/favicon/google.png");
    } 
    else if (selectedValue === 'Drive') {
        icon.setAttribute('href', '/images/favicon/drive.png');
        name.textContent = 'My Drive - Google Drive';
        localStorage.setItem("name", "My Drive - Google Drive");
        localStorage.setItem("icon", "/images/favicon/drive.png");
    } 
    else if (selectedValue === 'Classroom') {
        icon.setAttribute('href', '/images/favicon/classroom.png');
        name.textContent = 'Classes';
        localStorage.setItem("name", "Classes");
        localStorage.setItem("icon", "/images/favicon/classroom.png");
    }
}

// Retrieve selected option from localStorage and update the head section
const selectedOption = localStorage.getItem('selectedOption');
if (selectedOption) {
    updateHeadSection(selectedOption);
}
// Redirect
function handleDropdownChange(selectElement) {
    var selectedValue = selectElement.value;
    redirectToMainDomain(selectedValue);
}

function redirectToMainDomain(selectedValue) {
    var currentUrl = window.location.href;
    var mainDomainUrl = currentUrl.replace(/\/[^\/]*$/, '');
    
    if (window != top) {
        top.location.href = mainDomainUrl;
    } else {
        window.location.href = mainDomainUrl;
    }
}

// Dropdown event listener
const dropdown = document.getElementById('dropdown');
if (dropdown) {
    dropdown.addEventListener('change', function() {
        const selectedValue = dropdown.value;
        updateHeadSection(selectedValue);
        
        // Save selected option to localStorage
        localStorage.setItem('selectedOption', selectedValue);
    });
}

const switches = document.getElementById('particles-toggle');

if (switches) {
    if(window.localStorage.getItem('v4Particles') != "") {
      if(window.localStorage.getItem('v4Particles') == "true") {
        switches.checked = true;
      }
      else {
        switches.checked = false;
      }
    }

    switches.addEventListener('change', (event) => {
      if (event.currentTarget.checked) {
        window.localStorage.setItem('v4Particles', 'true');
      } else {
        window.localStorage.setItem('v4Particles', 'false');
      }
    });
}

var themeId = localStorage.getItem("theme");
if(themeId=="") {themeId="d"}

const themeDropdownElements = document.getElementsByClassName("td");
if (themeDropdownElements.length > 0) {
    themeDropdownElements[0].value = themeId;
}

const themeDropdown = document.getElementById('theme-dropdown');
if (themeDropdown) {
    themeDropdown.addEventListener('change', function() {
        const selectedValue = themeDropdown.value;

        localStorage.setItem('theme', selectedValue);

        window.location=window.location;
    });
}

function themeChange(ele) {
  const selTheme = ele.value;

  localStorage.setItem('theme', selTheme);

  window.location=window.location;
}