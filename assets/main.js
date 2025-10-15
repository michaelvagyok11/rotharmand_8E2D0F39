document.addEventListener('DOMContentLoaded', () => {

    // Univerzális eseménykezelés az oldalak szerint
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === 'index.html' || currentPage === '') {
        // FŐOLDAL FUNKCIÓK
        napiErtesito();

        const form = document.getElementById('mindfulness-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Megakadályozza az oldal újratöltődését

            const focus = parseInt(document.getElementById('focus').value);
            const calm = parseInt(document.getElementById('calm').value);
            const presence = parseInt(document.getElementById('presence').value);

            // A pontok egy tömbben kerülnek átadásra
            const pontok = [focus, calm, presence];
            const eredmeny = kalkulalMindfulnessPontszam(pontok);

            const eredmenyTerulet = document.getElementById('eredmeny-terulet');
            eredmenyTerulet.textContent = eredmeny;
        });
    }

    if (currentPage === 'gyakorlatok.html') {
        // GYAKORLATOK OLDAL FUNKCIÓK
        const toggleBtn = document.getElementById('breathing-toggle-btn');
        toggleBtn.addEventListener('click', startStopLegzes);
    }

    if (currentPage === 'megerositesek.html') {
        // MEGERŐSÍTÉSEK OLDAL FUNKCIÓK
        const newAffirmationBtn = document.getElementById('new-affirmation-btn');
        newAffirmationBtn.addEventListener('click', mutassMegerositest);
    }

});

/**
 * 1. FÜGGVÉNY: Napszaknak megfelelő üdvözletet jelenít meg.
 * Tartalmaz: ELÁGAZÁS
 */
function napiErtesito() {
    const udvozletElem = document.getElementById('udvozlet');
    if (!udvozletElem) return;

    const ora = new Date().getHours();
    let uzenet = "Üdv a csend szigetén!";

    if (ora >= 5 && ora < 12) {
        uzenet = "Jó reggelt! Induljon a nap tudatosan.";
    } else if (ora >= 12 && ora < 18) {
        uzenet = "Szép napot! Tarts egy rövid szünetet.";
    } else {
        uzenet = "Kellemes estét! Ideje lecsendesedni.";
    }
    udvozletElem.textContent = uzenet;
}


/**
 * 2. FÜGGVÉNY (PARAMÉTERES): Kiszámolja a mindfulness pontszámot.
 * Tartalmaz: PARAMÉTER, TÖMB, CIKLUS (ÖSSZEGZÉS TÉTEL), ARITMETIKAI MŰVELET, LOGIKAI MŰVELET, ELÁGAZÁS
 * @param {number[]} pontok - A felhasználó által adott pontokat tartalmazó tömb.
 * @returns {string} - Egy szöveges értékelés.
 */
function kalkulalMindfulnessPontszam(pontok) {
    let osszeg = 0;
    // ÖSSZEGZÉS PROGRAMOZÁSI TÉTEL (ciklussal)
    for (let i = 0; i < pontok.length; i++) {
        osszeg += pontok[i]; // Aritmetikai művelet (+)
    }

    // Aritmetikai művelet (/)
    const atlag = osszeg / pontok.length;

    // Elágazás és logikai műveletek (&&)
    if (atlag >= 4.0) {
        return `Kiváló! Az átlagpontszámod: ${atlag.toFixed(1)}. Nagyon tudatos napod van!`;
    } else if (atlag >= 2.5 && atlag < 4.0) {
        return `Jó úton jársz! Az átlagpontszámod: ${atlag.toFixed(1)}. Csak így tovább!`;
    } else {
        return `Ne aggódj! Az átlagpontszámod: ${atlag.toFixed(1)}. Minden nap egy új lehetőség.`;
    }
}

/**
 * 3. FÜGGVÉNY: Elindítja és megállítja a légzőgyakorlatot.
 * Ez a függvény egy komplexebb állapotkezelést valósít meg.
 */
let isBreathing = false;
let breathInterval;

function startStopLegzes() {
    const toggleBtn = document.getElementById('breathing-toggle-btn');
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');
    
    isBreathing = !isBreathing; // Állapot váltása

    if (isBreathing) {
        toggleBtn.textContent = 'Leállítás';
        const steps = ['Beszív', 'Tart', 'Kifúj', 'Tart'];
        let currentStep = 0;

        const runCycle = () => {
            text.textContent = steps[currentStep];
            switch(currentStep) {
                case 0: // Beszív
                    circle.classList.add('grow');
                    break;
                case 1: // Tart
                    break;
                case 2: // Kifúj
                    circle.classList.remove('grow');
                    break;
                case 3: // Tart
                    break;
            }
            
            currentStep = (currentStep + 1) % 4; // Ciklikus léptetés
        };
        
        runCycle(); // Azonnal elindul
        breathInterval = setInterval(runCycle, 4000); // 4 másodpercenként vált

    } else {
        toggleBtn.textContent = 'Indítás';
        clearInterval(breathInterval);
        text.textContent = 'Kattints a gombra a kezdéshez!';
    }
}


/**
 * 4. FÜGGVÉNY: Véletlenszerű megerősítést mutat egy tömbből.
 * Tartalmaz: TÖMB
 */
function mutassMegerositest() {
    const megerositesek = [
        "Képes vagyok nagyszerű dolgokat elérni.",
        "Minden nap egy új lehetőség a fejlődésre.",
        "Elfogadom magam olyannak, amilyen vagyok.",
        "A nyugalmam a szupererőm.",
        "Megérdemlem a boldogságot és a sikert.",
        "Hálás vagyok a mai napért.",
        "A pozitív gondolatok pozitív eredményeket hoznak.",
        "Minden kihívás egy lehetőség a növekedésre."
    ];

    const randomIndex = Math.floor(Math.random() * megerositesek.length);
    const affirmationTextElem = document.getElementById('affirmation-text');
    
    if (affirmationTextElem) {
        affirmationTextElem.textContent = `"${megerositesek[randomIndex]}"`;
    }
}