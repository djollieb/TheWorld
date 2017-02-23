// site.js

var ele = document.getElementById("username");
ele.innerHTML = "Ollie Badger";

var main = document.getElementById("main");
main.onmouseenter = function () {
    main.style.backgroundColor = "#888";
    
};

main.onmouseleave = function () {
    main.style.backgroundColor = "";
}
    