function mostrarData() {
    "use strict";
    
    var x = 1;
    
    while (x < 55) {
        x += x;
    }
    
    document.getElementById('texto').innerHTML = Date();
    document.getElementById('texto').style.color = "red";
    window.alert("TESTE " + x);
    console.log("Funfo? Será? Funfo sim");
    
}