

//library Ota Prokopec 1.1
  //script();
  //math();
      const data = new Proxy({ ota: 0}, {

        get(target, prop) {

          return target[prop];

        },

        set(target, prop, value) {

          target[prop] = value;
                 //console.log("this function");
          math();
          return true;

        }

      });
      data.pos = 0;


  ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
delay();
  function delay() {
    let ahoj = 0;
    let slovo = "";
    for (const element of Array.from(document.getElementsByTagName('delay'))) {
          let delay = element.getAttribute("delay");
          if (!isNaN(delay)) {
            delay = element.getAttribute("delay");
          }
          else
          {
            delay =  new Function(`return ${ delay }`)();
          }
                      element.style.display="none";
                setTimeout(function(){
                   element.style.display="block";

                 }, delay);



  }
  }
  /////////////////////////////
  //if
  //////////////////////
    script();
  function script() {
    for (const element of Array.from(document.querySelectorAll("[if]"))) {
      const element__script = element.getAttribute("if");
      const if__this = new Function(`return ${ element__script }`)();
      if (if__this) {
        element.style.display="block";
      }
      else {
        element.style.display="none";
      }
}
}

//////////////////////////////
//if
///////////////////////////
///////////////////////
//onclickor
///////////////////
let ifdo;

onclick();
window.addEventListener(ifdo, function (event) {
  onclick();
})
function onclick() {
 //console.log("onclick");
  /////////////// jedno repeat scripting
  for (const element of Array.from(document.getElementsByTagName('scripting'))) {
    let slovo = "";
    let array = [];
    const att = element.attributes;
    for(const [key, value] of Object.entries(att)) {

          if (value.name.charAt(0) == "o" && value.name.charAt(1) == "n" && value.name.charAt(2) == ":") {
                for (let pos = 3; pos < value.name.length; pos ++ ) {
                  array.push(value.name.charAt(pos));
                  slovo = array.join("");
                  ifdo = slovo;
                }
          }
}
  element.addEventListener(slovo, function (event) {
            const element__attribute = element.getAttribute("on:" + slovo);
            console.log(element);
            const domythinkgg = new Function(`return ${ element__attribute }`)();
            const att = element.attributes;
            for(const [key, value] of Object.entries(att)) {

          if (value.name == "mystyle-plus") {
                    const elstyle = element.getAttribute("style");
                    const elggstyle = element.getAttribute("mystyle-plus");
                    element.style.cssText=elstyle + elggstyle;
          }
          else if (value.name == "mystyle-only") {
            const elggstyle = element.getAttribute("mystyle-only");
            element.style.cssText=elggstyle;
          }}
          ifdo = slovo;
           array.slice(0, array.length);
           slovo = "";
        script ();
        //math();

  })
  }
}




////////////////////////
//onclickor
///////////
///////////////////////////////
//myStyle
///////////////////////////
//math function
/////////////////////////////////////////////////////////
//math();
function math() {
  for (const element of Array.from(document.getElementsByTagName('calc'))) {
    const vysledek = element.innerText;
    const promenna = element.getAttribute("var");

    //console.log("ahoj");
    if (promenna == "") {
      if (isNaN(vysledek)) {
        console.warn("this is not number, tag named calc can cacl, but it can write string too     if you want write string so you can write string to ''");
      }
        const vypocitani = new Function(`return ${ vysledek }`)();

        if (vysledek != "") {
          element.innerHTML=vypocitani;
        }
    }
    else {

            if (vysledek != "-") {
              let vypocitani = new Function(`return ${  promenna }`)();
              ////console.log("ahoj");
              element.innerHTML=vypocitani;
            }
            else {
              //let vypocitani = new Function(`return ${  promenna }${  vysledek }`)();
              ////console.log(vypocitani);
            }

    }


    }

}

forloop();
function forloop() {
  ////console.log("ahoj");
  for (const element of Array.from(document.getElementsByTagName('for'))) {
        const elvalue = element.getAttribute("loop");
        const vysledek = element.getAttribute("for");
        ////console.log(elvalue);
        //for (let pos = 0; pos < 4; pos ++) {
        //  data.ota++;
        //}
        /*const vypocitani = new Function(`for (${ elvalue }){
          forloopinfun()
        }`)();*/

        function evalFor(func) {
           new Function(`return (function(func){ for(${ elvalue }) { func() } })`)()(func);
        }

        evalFor(forloopinfun);

     function forloopinfun() {
       const vypocitani = new Function(`return ${  vysledek }`)();
     }
}
}
repeat();
function repeat() {
  let ahoj = 0;
  let slovo = "";
  for (const element of Array.from(document.getElementsByTagName('repeat'))) {
        const ahojgg = element.getAttribute("repeat");
        if (!isNaN(ahojgg)) {
          elvalue = ahojgg;
        }
        else {
          elvalue = new Function(`return ${ ahojgg }`)();
        }
        ////console.log(elvalue);
        const copakmapocitatju = elvalue + 1;
        const string = element.innerHTML;
        if (!isNaN(delay)) {
          for (let pos = 1; pos-1 < elvalue; pos ++) {
            forpos(pos);
}
        }
        else
        {
           delay = new Function(`return ${ element.getAttribute("delay") }`)();
           for (let pos = 1; pos-1 < elvalue; pos ++) {
             forpos(pos);
           }
        }

function forpos(value) {
  setTimeout(function(){
    slovo = slovo + string;
  element.innerHTML=slovo;
}, delay * value);

}
}}


///////////////////////////////////////////////
//math Function
//////////////////////////////////
