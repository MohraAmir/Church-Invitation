
const openBtn = document.getElementById("openBtn");
const coverScreen = document.getElementById("coverScreen");
const invitation = document.getElementById("invitation");
const childName = document.getElementById("childName");

// قراءة الاسم من اللينك
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// وضع الاسم داخل الدعوة
if (name) {
    childName.textContent = decodeURIComponent(name);
}

openBtn.addEventListener("click", () => {
    coverScreen.classList.add("hidden");
    invitation.classList.remove("hidden");
});
