const backdropRef = document.querySelector(".backdrop__modalf");
const closeBtnRef = document.querySelector(".modalf__closer");
const formRef = document.querySelector(".footer__form");

formRef.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    const email = evt.currentTarget.elements[0].value;
    openModal();
});

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



function onEscCloseModal(evt){
    if (evt.key === "Escape") {
        closeModal();
    }
}