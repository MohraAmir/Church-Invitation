
/* =================================
   أسماء الأولاد
================================= */
const children = {

    gerges_wageih: {
        name: "Gerges Wageih"
    },

    bola_romany: {
        name: "Bola Romany"
    },

    kerolos_gobraeel: {
        name: "Kerolos Gobraeel"
    },

    kerolos_botros: {
        name: "Kerolos Botros"
    },

    kerolos_ashraf: {
        name: "Kerolos Ashraf"
    },

    arebcima_lahzy: {
        name: "Arebcima Lahzy"
    },

    bassant_amounios: {
        name: "Bassant Amounios"
    },

    jolia_ayman: {
        name: "Jolia Ayman"
    },

    jomana_tadrs: {
        name: "Jomana Tadrs"
    },

    jessika_kamal: {
        name: "Jessika Kamal"
    },

    remonda_hany: {
        name: "Remonda Hany"
    },

    marolla_hany: {
        name: "Marolla Hany"
    },

    veroneika_gerges: {
        name: "Veroneika Gerges"
    },

    kerolos_ayman: {
        name: "Kerolos Ayman"
    },

    kerolos_magedy: {
        name: "Kerolos Magedy"
    },

    kerolos_abdo: {
        name: "Kerolos Abdo"
    },

    kerolos_romany: {
        name: "Kerolos Romany"
    },

    kerolos_kamal: {
        name: "Kerolos Kamal"
    },

    matthew_hany: {
        name: "Matthew Hany"
    }

};


/* =================================
   قراءة الاسم من الرابط
================================= */

const params = new URLSearchParams(
    window.location.search
);

const childId = params.get("name");

const child = children[childId];


/* =================================
   عرض الاسم
================================= */

if (child) {

    document.getElementById("childName").textContent =
        child.name;

}


/* =================================
   زر فتح الدعوة
================================= */

const openBtn =
    document.getElementById("openBtn");

const coverScreen =
    document.getElementById("coverScreen");

const invitation =
    document.getElementById("invitation");


openBtn.addEventListener("click", function () {

    coverScreen.classList.add("close");


    setTimeout(function () {

        coverScreen.style.display = "none";

        invitation.classList.remove("hidden");

    }, 1000);

});

