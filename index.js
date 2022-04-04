let lenel=document.getElementById("length")
let volel=document.getElementById("volume")
let massel=document.getElementById("mass")
let uniel=document.getElementById("initial")
let unit = prompt("Please enter value :");
uniel.innerText=unit
console.log(unit)
let met=0
let inch=0
console.log("terstying")
function leng(){
    met=Math.round(unit/39.37)
    inch=Math.round(unit*39.37)
    let merstr=unit+"inches"+"="+met+"metres"
    let inrstr=unit+"metres"+"="+inch+"inches"
    let final="\n"+merstr+"|"+inrstr
    lenel.innerText=final
}
let lit=0
let gal=0
function volume(){
    gal=Math.round(unit/3.785)
    lit=Math.round(unit*3.785)
    let galstr=unit+"litres"+"="+gal+"gallons"
    let litstr=unit+"gallons"+"="+lit+"litres"
    let fin="\n"+galstr+"|"+litstr
    volel.innerText=fin
}
let kg=0
let pound=0
function mass(){
    pound=Math.round(unit*2.205)
    kg=Math.round(unit/2.205)
    let pundstr=unit+"kilos"+"="+pound+"pounds"
    let kgstr=unit+"pounds"+"="+kg+"kilos"
    let fi="\n"+pundstr+"|"+kgstr
    massel.innerText=fi
}
console.log(met)
leng()
volume()
mass()
console.log(met)
console.log(lenel)