// const tablica=[];

// for (let i=1; i<11; i++) {
//     console.log(i);
//     tablica.push('To jest : '+i)
// };


// console.log(tablica);

                            // WHILE //

// let money = window.prompt("Podaj ile masz pieniędzy");
// let cena = window.prompt("Podaj cenę piwka : ");
// console.log(money);4
// while (money >= cena) {
//     console.log("Masz " + money + " zł. " );
//     console.log("Możesz kupić " + parseInt(money/cena) + " piwek");
    
//     money -= cena;
// };


                            // LOOP IN LOOP

// for (let i = 1; i < 6; i++ ) {
//     console.log(`------------------ mnożenie przez liczbę ${i} ----------------------------`);
//     for (let j=1; j < 11; j++) {
//         console.log(` zmienna i czyli ${i} pomnożona przez zmienną j czyli ${j} da wynik ${i * j}`);
        
//     }
// }

                            // LOOP IN []

// const age=[23,19,45,24,78,34];
// const name=["Ala","Ela","Ola","Nina","Maryla","Ania"];

// console.log("LP.\t", "Wiek \t\t", "Imie");
// for (let i = 0; i < age.length; i++ ) {
//     console.log(`${i+1} \t ${age[i]} lat \t ${name[i]}`);   
// }

                            // LOOP FOR from ES6

// const names=["Ala","Ela","Ola","Nina","Maryla","Ania"];
// for (const name of names) {
//     console.log(name);
// }

                            // FUNKCJE //

const showText = (text) => {
    const insideShowText = text;
    return (insideShowText)
}  ;
insideShowText2 = showText("Hello");