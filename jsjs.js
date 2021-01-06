/* library Ota Prokopec 1.1*/
const array = [];
const char = [];
let slovo = ""
let onclickorgg = "";
let funkcetrue = true;
let ahojgg = "ahoj";
let ahojarray = [];
window.addEventListener("load", function (event) {

  function ahoj() {
    zkontrolovat();/*
  function zkontrolovat() {



      for (const element of Array.from(document.querySelectorAll("[script]"))) {
        ////console.log(element);
     const podminka = element.getAttribute("script");
     ////console.log(podminka);
     for (let pos = 0; pos < podminka.length; pos++) {
          array.push(podminka.charAt(pos));



   }

  const ifgg = array.join("");
  array.splice(0, array.length);

  ////console.log(ifgg);
  const func = new Function(`return ${ ifgg }`)();
  ////console.log(func);
  if (func === true) {
    funkcetrue = true;
    const gg = element.innerText;
      ////console.log(gg);
      if (gg.charAt(0) == "/") {
        for (let ggpos = 2; ggpos < gg.length; ggpos ++) {
                 char.push(gg.charAt(ggpos));
          }
          const charplus = char.join("");
          const vypocitani = new Function(`return ${ charplus }`)();
              ////console.log(vypocitani);
              element.innerText = vypocitani;
      }
  }
    else {
      funkcetrue = false;
      element.remove();
    }
}}*/
if (funkcetrue == true) {



    //return funkcetrue;


  for (const element of Array.from(document.querySelectorAll("[to]"))) {
    ////console.log("ahoj",element);
     funcgg(element, onclickorgg);

}}
}

//funcgg(element, onclickorgg);

    function funcgg(element, onclickorgg) {
      let attrs = element.attributes;
      //console.log(attrs);




function onlystyle() {
  const promenna = element.getAttribute("s:tyle");
      element.style.cssText=promenna;
}
function addstyle() {
  const promenna = element.getAttribute("s-tyle");
  const promenastyle = element.getAttribute("style");
  console.log(promenna, promenastyle);
      element.style.cssText=promenna + promenastyle;
}





          for(const [key, value] of Object.entries(attrs)) {

            //console.log(value);
  if (value.name.charAt(0) == "o" && value.name.charAt(1) == "n" && value.name.charAt(2) == ":") {

    slovo = "";
    ahojarray.splice(0, ahojarray.length);

                          for (let pos = 3;pos < value.name.length; pos++) {
                               ahojarray.push(value.name.charAt(pos));
                               //console.log(ahojarray);
                                   slovo = ahojarray.join("");
                          }

                     }


              }
              //const slovo = ahoj.join("");
      ////console.log("ahoj");
      element.addEventListener(slovo, function (event) {
              console.time("a");
        slovo = "";
        //console.log(slovo + ahojarray);
        const ifdog = element.getAttribute("promenna");

        ////console.log("ahoj");
        const con = element.getAttribute("to");
        const vypocitani = new Function(`return ${ con }`)();
        //console.log(vypocitani);
        if (ifdog == "") {

        } else {
          const ifdogg = new Function(`return ${ ifdog }`)();
          //console.log(ifdogg);
          element.innerText=ifdogg ;
        }
        console.timeEnd("a");
        if (element.getAttribute("s:tyle") == "") {
        } else {

          onlystyle();
        }
        if (element.getAttribute("s-tyle") == "") {
        } else {

          addstyle();
        }
    math();
        zkontrolovat();

    })
     }

/*
////console.log(podminka);
for (let pos = 0; pos < podminka.length; pos++) {
    array.push(podminka.charAt(pos));



}
const ifgg = array.join("");
array.splice(0, array.length);

////console.log(ifgg);
const func = new Function(`return ${ ifgg }`)();
////console.log(func);
if (func === true) {
const gg = element.innerText;
 ////console.log(gg);
 if (gg.charAt(0) == "/") {
   for (let ggpos = 2; ggpos < gg.length; ggpos ++) {
            char.push(gg.charAt(ggpos));
     }
     const charplus = char.join("");
     const vypocitani = new Function(`return ${ charplus }`)();
         ////console.log(vypocitani);
         element.innerText = vypocitani;
 }
}
else {
 element.remove();
}
}*/

  ahoj();
})
function zkontrolovat() {


    for (const element of Array.from(document.querySelectorAll("[script]"))) {
      //console.log(element);
   const podminka = element.getAttribute("script");
   ////console.log(podminka);
   for (let pos = 0; pos < podminka.length; pos++) {
        array.push(podminka.charAt(pos));
          math();


 }

const ifgg = array.join("");
array.splice(0, array.length);

////console.log(ifgg);
const func = new Function(`return ${ ifgg }`)();
////console.log(func);
if (func === true) {
  element.style.display="block";
  funkcetrue = true;
  const gg = element.innerText;
    ////console.log(gg);
    if (gg.charAt(0) == "/") {
      for (let ggpos = 2; ggpos < gg.length; ggpos ++) {
               char.push(gg.charAt(ggpos));
        }
        const charplus = char.join("");
        const vypocitani = new Function(`return ${ charplus }`)();
            ////console.log(vypocitani);
            element.innerText = vypocitani;
    }
}
  else {
    funkcetrue = false;
    element.style.display="none"
    //element.remove();
  }


  math();
}
}
function math() {
  for (const element of Array.from(document.getElementsByTagName('calc'))) {



  let el = document.getElementsByTagName("calc");
//console.log(el[0].tagName);
//console.log(element.tagName);
if (el[0].tagName == element.tagName) {
  const gg = element.innerText;
  const vypocitani = new Function(`return ${ gg }`)();
  //console.log(element);
  element.innerHTML=vypocitani;

}}

}
