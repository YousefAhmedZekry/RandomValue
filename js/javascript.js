let form = document.getElementById("form"),
    theInput = document.getElementById("text"),
    submitBtn = document.getElementById("submit"),
    show = document.getElementById("sw");
    arrayRandom = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (theInput.value == "") {
        return false;
    } else {
        alert(`${theInput.value} Added`);
        arrayRandom.push(theInput.value);
        theInput.value = "";
    };
});

show.addEventListener("click", () => {
    if (arrayRandom.length >= 3) {
        document.getElementById("show").innerHTML = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
    } else {
        return false;
    };
});