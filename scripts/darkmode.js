(function () {
    const btn = document.querySelector(".lightswitch");
    const body = document.body;
    const modals = document.querySelectorAll('.modal-content');
    
    // Select icons
    const lightIcon = btn.querySelector(".icon-light");
    const darkIcon = btn.querySelector(".icon-dark");

    // Load theme from localStorage
    const currentTheme = localStorage.getItem("theme") || "light";

    if (currentTheme === "dark") {
        body.classList.add("dark-theme");
        modals.forEach(modal => modal.classList.add('dark-theme'));
        
        // Update icon to dark
        lightIcon.style.display = "none";
        darkIcon.style.display = "inline";
        }
    else {
        // Update icon to light
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
        }

    btn.addEventListener("click", () => {
        const isDarkTheme = body.classList.toggle("dark-theme");
        
        // Toggle the theme on modals
        modals.forEach(modal => modal.classList.toggle('dark-theme', isDarkTheme));
        
        // Toggle icons based on theme
        lightIcon.style.display = isDarkTheme ? "none" : "inline";
        darkIcon.style.display = isDarkTheme ? "inline" : "none";
        
        // Save the current theme to localStorage
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    });
})();




/*
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

const btn = document.querySelector(".lightswitch");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    // Ensure that the modals also get the dark theme
    document.querySelectorAll('.modal-content').forEach(modal => {
        modal.classList.toggle('dark-theme');
    });
    
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});






  



https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    }
    (function () {
    })();
    */