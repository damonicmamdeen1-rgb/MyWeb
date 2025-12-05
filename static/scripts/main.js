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

// Retrieve selected option from localStorage and update the head section
// Only run if updateHeadSection is defined (from settings.js)
(function() {
  var storedOption = localStorage.getItem('selectedOption');
  if (storedOption && typeof updateHeadSection === 'function') {
    updateHeadSection(storedOption);
  }
})();

// Dropdown event listener
(function() {
  var dropdownElement = document.getElementById('dropdown');
  if (dropdownElement && typeof updateHeadSection === 'function') {
    dropdownElement.addEventListener('change', function() {
      var selectedValue = dropdownElement.value;
      updateHeadSection(selectedValue);
      
      // Save selected option to localStorage
      localStorage.setItem('selectedOption', selectedValue);
    });
  }
})();
