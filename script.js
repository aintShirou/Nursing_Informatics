document.addEventListener("DOMContentLoaded", function() {

    var tabLinks = document.querySelectorAll(".tab-links");
    var tabContents = document.querySelectorAll(".tab-contents");
  
    
    document.body.addEventListener("click", function(event) {
      var target = event.target;
  
     
      if (target.classList.contains("tab-links")) {
        var tabName = target.getAttribute("data-tabname");
  
        tabLinks.forEach(function(link) {
          link.classList.remove("active-link");
        });
  
        tabContents.forEach(function(content) {
          content.classList.remove("active-tab");
        });
  
        target.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
      }
    });

    var homeBar = document.getElementById("home-bar");
    var homeSection = document.getElementById("home");
  
      homeBar.addEventListener("click", function(event) {
      event.preventDefault();
      homeSection.scrollIntoView({ behavior: "smooth" });
    });

      var moreBar = document.getElementById("more-bar");
      var moreSection = document.getElementById("more");
  
      moreBar.addEventListener("click", function(event) {
      event.preventDefault();
      moreSection.scrollIntoView({ behavior: "smooth" });
    });

    var learnMoreButton = document.getElementById("learn-more-button");
    var moreSection = document.getElementById("more");
  
    learnMoreButton.addEventListener("click", function(event) {
      event.preventDefault();
      moreSection.scrollIntoView({ behavior: "smooth" });
    });


    var historyBar = document.getElementById("history-bar");
    var historySection = document.getElementById("history");
  
      historyBar.addEventListener("click", function(event) {
      event.preventDefault();
      historySection.scrollIntoView({ behavior: "smooth" });
    });

    var principleBar = document.getElementById("principle-bar");
    var principleSection = document.getElementById("principles");
  
      principleBar.addEventListener("click", function(event) {
      event.preventDefault();
      principleSection.scrollIntoView({ behavior: "smooth" });
    });

    var evolutionBar = document.getElementById("evolution-bar");
    var evolutionSection = document.getElementById("evolution");
  
      evolutionBar.addEventListener("click", function(event) {
      event.preventDefault();
      evolutionSection.scrollIntoView({ behavior: "smooth" });
    });

});