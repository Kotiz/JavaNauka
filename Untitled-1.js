// const tablica=[];

// for (let i=1; i<11; i++) {
//     console.log(i);
//     tablica.push('To jest : '+i)
// };


// console.log(tablica);

                            // WHILE //

let money = window.prompt("Podaj ile masz pieniędzy");
let cena = window.prompt("Podaj cenę piwka : ");
// let money=50;

// let cena = 4;
// console.log(money);4
while (money >= cena) {
    console.log("Masz " + money + " zł. " );
    console.log("Możesz kupić " + parseInt(money/cena) + " piwek")
    
    money -= cena;
};