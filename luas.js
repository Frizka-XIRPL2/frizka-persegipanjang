var panjangInput = document.querySelector(".Panjang")
var lebarInput = document.querySelector(".Lebar")
var luasButton = document.querySelector(".luas")
var Luas,Panjang,Lebar;

function myFunction(){
    Panjang = panjangInput.value;
    Lebar = lebarInput.value;
    Luas = Panjang * Lebar;
    alert("Luasnya adalah :" + Luas);
}