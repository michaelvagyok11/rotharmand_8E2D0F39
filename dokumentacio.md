# Projekt Dokumentáció: Digitális Elvonulás

Az egész elérhető a linken keresztül: https://ganz.pixelmatic.hu/1015/

## A weboldal témája

A **Digitális Elvonulás** egy olyan online menedék, amely segít a felhasználóknak egy pillanatra megállni a rohanó digitális világban. Célja, hogy egyszerű, de hatékony eszközöket biztosítson a mentális feltöltődéshez, a stressz csökkentéséhez és a tudatos jelenlét (mindfulness) gyakorlásához. Az oldal minimalista, nyugtató designnal rendelkezik, hogy maga a felület is hozzájáruljon a relaxációhoz.

## Felhasznált technológiák

* **HTML5:** A weboldal strukturális felépítéséhez, szemantikus elemekkel.
* **CSS3:** A modern, reszponzív és esztétikus megjelenés kialakításához. A reszponzivitást Flexbox segítségével valósítottam meg.
* **JavaScript (ES6):** Az oldal interaktív funkcióinak megvalósításához, a felhasználói élmény fokozásához.

## Részek és függvények funkciója

### Fájlok

* **index.html:** A Főoldal, amely bemutatja az oldal célját, és tartalmaz egy egyszerű napi "mindfulness pontszám" kalkulátort.
* **gyakorlatok.html:** Egy interaktív, vizuálisan vezetett légzőgyakorlat oldala.
* **megerositesek.html:** Egy oldal, ahol a felhasználó gombnyomásra véletlenszerű pozitív megerősítéseket kaphat.
* **css/style.css:** A teljes weboldal megjelenéséért felelős stíluslap. Reszponzív kialakítást biztosít különböző képernyőméretekre.
* **js/main.js:** A weboldal dinamikus működését ellátó szkript. Itt találhatóak az eseménykezelők és a funkciók.

### JavaScript Függvények (`main.js`)

1.  **`napiErtesito()`**: Nem vesz át paramétert. A Főoldalon megjelenít egy, a nap aktuális órájától függő üdvözlő üzenetet (pl. "Jó reggelt!", "Szép napot!"). Ez a függvény **elágazást** használ.
2.  **`kalkulalMindfulnessPontszam(pontok)`**: Paraméterként egy tömböt vár, amely a felhasználó által adott napi értékeléseket tartalmazza. A függvény **összegzés programozási tétel** segítségével összeadja a pontokat, majd **aritmetikai művelettel** kiszámolja az átlagot, és visszaad egy szöveges értékelést. Ez egy **paraméteres függvény**, amely **ciklust**, **tömböt** és **logikai műveleteket** is alkalmaz.
3.  **`startStopLegzes()`**: Nem vesz át paramétert. A "gyakorlatok" oldalon elindítja vagy leállítja a légzőgyakorlat animációját és a hozzá tartozó szöveges utasításokat.
4.  **`mutassMegerositest()`**: Nem vesz át paramétert. A "megerositesek" oldalon egy előre definiált **tömbből** kiválaszt egy véletlenszerű pozitív megerősítést és megjeleníti azt a felhasználónak.

## Gemini prompt:
Projekt feladat: Weboldal készítés
Készíts egy komplett weboldalt egy általad választott témában.

Dokumentáció:

Készíts rövid dokumentációt (pl. dokumentacio.md), amely tartalmazza:
Miről szól a weboldalad (téma rövid bemutatása).
Milyen technológiákkal valósítottad meg (HTML, CSS, JS stb.).
Az egyes részek és függvények funkciójának rövid leírása (nem kell a működést részletezni).
A dokumentációban add meg, milyen témában** készíted a weboldalt.
Követelmények:

1. Az oldal legalább 3 oldalból álljon.
2. A projektben legyen legalább 4 darab JavaScript függvény, amelyek különböző feladatokat látnak el.
 A függvények között legyen paraméteres is.
3. Az oldalon kötelezően szerepelnie kell.
aritmetikai műveleteknek,
logikai műveleteknek,
elágazásnak,
tömbnek,
ciklusnak,
és függvénynek.
4. A megoldás során az öt programozási tétel közül legalább egyet alkalmazz (összegzés, számlálás, kiválasztás, keresés, maximum/minimum).

legyen szép, reszponzív és modern a weboldal, a téma pedig legyen bármi, de ne közönséges, valami egyedi de ne béna


## Gemini válasz:
Rendben, itt van egy komplett weboldal projektjavaslat a "Digitális Elvonulás" témában, amely minden megadott követelménynek megfelel. A téma egyedi, modern és pozitív üzenetet hordoz, lehetőséget adva egy letisztult, esztétikus design megvalósítására.

A projekt a következő fájlokból állna:

index.html (Főoldal)

gyakorlatok.html (Interaktív légzőgyakorlat)

megerositesek.html (Pozitív megerősítések generátor)

css/style.css (A weboldal stíluslapja)

js/main.js (A weboldal funkcionalitását kezelő JavaScript kód)

dokumentacio.md (A projekt dokumentációja)

ezután már csak a kódok voltak.