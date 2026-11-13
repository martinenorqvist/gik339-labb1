/*============================
UPPGIFT 2
==============================

/* Upggift 2:2*/

/*Före blocket - let och const ger ReferenceError eftersom de inte ör deklarerade än, var ger undefined eftersom deklarationen lyfts upp.
console.log(frukt);
console.log(mat);
console.log(dryck);
*/


{ let frukt = "Banan";
var mat = "Sushi";
const dryck = "Fanta";

/*Innuti blocket- alla fungerar
console.log(frukt);
console.log(mat);
console.log(dryck);
*/

}

/*Efter blocket
console.log(frukt); //fungerar inte utaför blocket
console.log(mat);  //fungerar utanför blocket efersom det är var
console.log(dryck); //fungerar inte utanför blocket
*/




/*===============================
UPPGIFT 3 OCH 4
================================*/

const add =  (num1, num2) => {
    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);
    console.log(num1 ? "truthy" : "falsy");

    if (typeof num1  === "number" && 
        typeof num2 === "number" && 
        num1 !== null && 
        num2 !== null && 
        num1 !== undefined &&
        num2 !== undefined &&
        !Number .isNaN(num1) &&
        !Number .isNaN(num2)
    ) {
    return num1 + num2;
    }
};

/*===============================
UPPGIFT 5
================================*/
const num1 = 0
let arg1;
let sum = false;
console.log(add(sum, 1));
console.log(add("0", 3));
console.log(add(3, "num1"));
console.log(add(-5, num1));
console.log(add(arg1, 7));
console.log(add());
console.log(add(-7, -3));
console.log(num1);
console.log(sum);



/*=====================================
    REFLEKTIONER
=======================================

/*=====================================
 Reflektioner Upggift 1
 1.
- Script används för att koppla javascript-filen till html-filen,
2.
- Defer gör att webbläsaren väntar med att köra javascript koden tills html-dokumentet har lästs in
*/


/* Reflektioner uppgift 2: 
1.
- var: har inte ett blockspace, vilket betyder att variabeln även kan användas utanför blocket.
- let: har blockscape, och variabekn kan bara anvöndas inom det block där den skapades. 
- const: har också blockspace som let, men kan inte tilldela v aribeln ett nytt värde efter att den har skapats.
2. 
- Före blocket: let och const ger ReferneceError när jag förösker använda variabekn innan den har deklarerats. Var ger undefined när jag skrivrer ut den före deklarationen.
- Innuti blocket: alla tre fungerar och skriver ut värdet, eftersom variablerna är deklarerade.
- Efter blocket: let och const ger ReferenceError eftersom variablerna inte är tillgängliga utanför blocket. Var fungerar även efter blocket eftersom variablen inte är begränsd till blocket.

======================================
/* Reflektioner Upggift 3
1.
- Om man skapar variabeln med nyckelordet let istället för const så hade jag kunnat tilldela variabeln add ett nytt värde efter den skapats. Med const så kan jag inte tilldela variabeln ett nytt värde.
2.
-     function add(num1, num2) {
        return num1 + num2;
      }
3.
- returnera innebär att man skickar tillbaka ett värde från funktionen. */


/*======================================
 Reflektioner Upggift 4
 1. 
 - ternary operator är ett sätt att skriva ett villkor på en kortare rad i javascript. Den består av 3 delar: ett vilkor, ett alternativ om vilkoret är sant (?), och ett alternativ om villkoret är falskt (:).
 Hur den skiljer sig från en if-sats är att ternary operator anävnds när man vill kontrollera ett enkelt villkor och välja mellan två alternativ. En if-sats anvädns istället när man vill kontrollera ett villkor och utföra kod beroende på om villkoret stämmer. 
 2. 
 - Skillanden mellan == och === är att == jämför om två värden är lika, och javascript kan omvandla datatyper innan jämförelsen, === jämför om två värden är exakt lika, både till värde och datatyp och ingen automatisk omvandling görs. 
 3. 
 - Jag använde !== null och !== undefined för att kontrollera att parametrarna inte har värdet null eller undefined. Jag använde !Number.isNaN() för att kontrollera att parametrarna inte innehålelr värdet NaN. Jag använde också && mellan villkren eftersom både num1 och num2 måste uppfylla kraven för att funktionen ska returnera summan. 
 
 */

 /*======================================
 Reflektioner Upggift 5
 1.
 -Parameter är namnet på en plats som fubktionen tar emot ett värde i. I denna uppgift - num1 och num2. 
 -Argument är det faktiska värdet man skcikar in när man anropar funktionen, tikll exempel talen eller varibleran i testrna i uppgiften.
 -Variabel är ett namn som används för att spara ett värde, till exempel sum eller arg1 i uppgiften. 
 2.
 Den yttre variablen num1 har fortfarande värdet 0 eftersom jag aldrig ändrade den. Parametern num1 inne i funktionen är separat från den yttre variablen och får olika värden beroende på vilka argument som skickas in.
 3.
 -Första anropet ger undefined eftersom sum har värdet false, vilket inte räknas som ett giltigt tal i funktionen, därför returneras inget värde.
 -Andra anropet ger undefined eftersom "0" är en text och inte ett nummer.
 -Tredje anropet ger undefined eftersom "num1" är en text och inte ett nummer.
 Fjärde anropet ger -5 eftersom -5 + 0 blir -5. Båda värderna är giltiga tal och kan adderas.
 -Femte anropet ger undefined eftersom arg1 saknar ett värde. 
 -Sjätte anropet ger undefined eftersom inga argument skickas till funktionen. Då saknar båda parametrarna värden.
 -Sjunde anropet ger -10 eftersom -7 + -3 blir -10 och båda argumenten är giltiga tal.

 -Den yttre variabelnm num1 har fortfarande värdet 0 och sum har fortfarande värdet false eftersom de inte ändras av funktionsanropen.
 */