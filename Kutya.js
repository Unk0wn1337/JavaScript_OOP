class Kutya{
    /*privat adattagok lesznek
        Osztályon kivűlről nem érhető el a privát adattag
    
    */ 
    #nev;
    #fajta;
    #mondat;
    #szuloELEM;

    constructor(nev,fajta,mondat,szuloELEM){
        /*Adattagok kezdő értékének inicializálása*/
        /*this mindig az osztály aktuális
        példányára fog mutatni
        */ 
        this.#nev = nev;
        this.#fajta = fajta;
        this.#mondat = mondat;
        this.#szuloELEM =szuloELEM;
        this.#megjelenit();
    }
    /*tagfüggvény, az adattagokon végez műveletek*/ 
    beszel(){
        console.log(this.#mondat);
    }
    #htmlOsszeallit(){
        let txt = `<div class="Kutya">
            <h2>${this.#nev}</h2>
            <h2>${this.#fajta}</h2>
        </div>`;

        return txt;
    }
    #megjelenit(){
        this.#szuloELEM.append(this.#htmlOsszeallit())
    }
    get nev(){
        return this.#nev;
    }
    set mondat(szoveg){
        this.#mondat = szoveg;
    }

}

export default Kutya;