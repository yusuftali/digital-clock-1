var aSaat = document.getElementById("saat"); //aSaat adında bir değişken tanımladık.
function format(saatcek) {
var bSaat = saatcek.toString();
if (bSaat.length == 1) {
return "0" + bSaat;
} else {
return bSaat;
}
}
function saatGuncelleme() { //Burada bilgisayarımızdan saati çekiyoruz.
var tarih = new Date();
var saat = tarih.getHours(); //Burada saati çekiyoruz.
var dakika = tarih.getMinutes(); //Burada dakikayı çekiyoruz.
var saniye = tarih.getSeconds(); //Burada saniyeyi çekiyoruz.
aSaat.textContent = format(saat) + ":" + format(dakika) + ":" + format(saniye); //Burada ekranımıza çıktımızı veriyoruz.
}
setInterval(saatGuncelleme, 1000);