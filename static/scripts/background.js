document.addEventListener("DOMContentLoaded", function() {
  var saveButton = document.getElementById("save-button");
  if (saveButton) {
    saveButton.addEventListener("click", function() {
      var backgroundInput = document.getElementById("background-input");
      var imageURL = backgroundInput.value;

      if (imageURL !== "") {
        localStorage.setItem("backgroundImage", imageURL);
        document.body.style.backgroundImage = "url('" + imageURL + "')";
        backgroundInput.value = "";
      }
    });
  }

  var resetButton = document.getElementById("reset-button");
  if (resetButton) {
    resetButton.addEventListener("click", function() {
      localStorage.removeItem("backgroundImage");
      document.body.style.backgroundImage = "url('default-background.jpg')";
    });
  }

  var savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')";
  }
});
