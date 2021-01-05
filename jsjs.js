const array = [];
const char = [];
let slovo = ""
let onclickorgg = "";
let funkcetrue = true;
let ahojgg = "ahoj";
let ahojarray = [];
window.addEventListener("load", function (event) {

  function ahoj() {
    zkontrolovat();

if (funkcetrue == true) {





  for (const element of Array.from(document.querySelectorAll("[to]"))) {
    ////console.log("ahoj",element);
     funcgg(element, onclickorgg);

}}
}


    function funcgg(element, onclickorgg) {
      let attrs = element.attributes;
      //console.log(attrs);

          for(const [key, value] of Object.entries(attrs)) {
  if (value.name.charAt(0) == "o" && value.name.charAt(1) == "n" && value.name.charAt(2) == ":") {

    slovo = "";
    ahojarray.splice(0, ahojarray.length);

                          for (let pos = 3;pos < value.name.length; pos++) {
                               ahojarray.push(value.name.charAt(pos));
                                   slovo = ahojarray.join("");
                          }

                     }


              }
      element.addEventListener(slovo, function (event) {
              console.time("a");
        slovo = "";
        const ifdog = element.getAttribute("promenna");
        const con = element.getAttribute("to");
        const vypocitani = new Function(`return ${ con }`)();
        if (ifdog == "") {

        } else {
          const ifdogg = new Function(`return ${ ifdog }`)();
          element.innerText=ifdogg ;
        }
        zkontrolovat();

               console.timeEnd("a");


           math();
    })
     }



  ahoj();
})
function zkontrolovat() {
    for (const element of Array.from(document.querySelectorAll("[script]"))) {
   const podminka = element.getAttribute("script");
   for (let pos = 0; pos < podminka.length; pos++) {
        array.push(podminka.charAt(pos));
          math();
 }
const ifgg = array.join("");
array.splice(0, array.length);
const func = new Function(`return ${ ifgg }`)();
if (func === true) {
  element.style.display="block";
  funkcetrue = true;
  const gg = element.innerText;
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
  }
  math();
}
}
function math() {
  for (const element of Array.from(document.getElementsByTagName('calc'))) {
  let el = document.getElementsByTagName("calc");
if (el[0].tagName == element.tagName) {
  const gg = element.innerText;
  const vypocitani = new Function(`return ${ gg }`)();
  element.innerHTML=vypocitani;

}}

}
