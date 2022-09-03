const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) =>
            btn.querySelector(".color").classList.remove("selected")
        );
        buttons.forEach((btn) =>
            btn.querySelector(".description").classList.remove("active")
        );

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");
        button.querySelector('.description').classList.add("active");
        image.classList.toggle("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 100);
    });
});