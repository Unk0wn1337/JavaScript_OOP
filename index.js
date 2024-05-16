import Kutya from "./Kutya.js";

/*Peldanyositas kutya*/
const k = new Kutya("Bodri","golden retriver","Adj enni",$(".tarolo"));
const k2 = new Kutya("Daisy","keverék","Szeretlek fejlesztő!",$(".tarolo"));
//Kívűlről tudok újabb adattagokat hozzáadni az osztályhoz.
//k.egyEgeszenUjTulajdonsag="konstruktor hivas nelkul is tudok értéket adni neki";
//ezeket ne használjuk
console.log(k.nev);
k.mondat("reppelek, öcskös")
console.log(k2);
k.beszel();