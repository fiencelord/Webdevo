function hamburger() {
      const nav = document.querySelector(".menu");
        nav.style.transform = "translateX(0)";
      } 
      
    function closeMenu() {
      const nav = document.querySelector(".menu");
      nav.style.transform = "translateX(-300px)";
    }