let inr = document.getElementById("INR");
let usd = document.getElementById("usd");


inr.addEventListener("input",function(){
    let r = parseFloat(inr.value);
    let d = r / 84.64
    usd.value = d.toFixed(2);
})

usd.addEventListener("input",function(){
    let d = parseFloat(usd.value);
    let r = d * 84.64
    inr.value = r.toFixed(2);

})