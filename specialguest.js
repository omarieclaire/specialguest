  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("see-more-button");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "See More";
      moreText.style.display = "none";
      var guestsContainer = document.getElementById("guests");
      guestsContainer.scrollIntoView(false);
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "See Less";
      moreText.style.display = "inline";
    }
  }
