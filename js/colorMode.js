let light = document.querySelector('#light');
let dark = document.querySelector('#dark');


light.addEventListener('click', function () {
    light.classList.add("active");
    dark.classList.remove("active");
    document.body.classList.remove("darkMode"); 
});


dark.addEventListener('click', function () {
    dark.classList.add("active");
    light.classList.remove("active");
    document.body.classList.add("darkMode");
});