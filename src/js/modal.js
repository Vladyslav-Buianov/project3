const backdropRef = document.querySelector(".backdrop__modal");
const closeBtnRef = document.querySelector(".modal__closer");
const formRef = document.querySelector(".modal__form");
const spanRef = document.querySelector(".header__user");

function openModal() {
    backdropRef.style.display = "flex";
    window.addEventListener("keydown", onEscCloseModal);
}

function closeModal() {
    backdropRef.style.display = "none";
    window.removeEventListener("keydown", onEscCloseModal)
}


closeBtnRef.addEventListener("click", ()=> {
    closeModal();
});

backdropRef.addEventListener("click", (evt)=> {
    if (evt.target === evt.currentTarget) {
        closeModal();
    }
    window.removeEventListener("keydown", ()=>{})
});

formRef.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    const name = evt.currentTarget.elements[0].value;
    spanRef.textContent = name;
    closeModal();
});

function onEscCloseModal(evt){
    if (evt.key === "Escape") {
        closeModal();
    }
}