function temperature()
{
    var cel = document.getElementById("c").value;
    var fah = [cel * (9/5)] + 32;
    document.getElementById("f").value = fah; 
}
function weight(){
    var kil = document.getElementById("kilo").value;
    var pound = kil * 2.2;
    document.getElementById("pounds").value = pound;
}
function distance(){
    var kmm = document.getElementById("km").value;
    var mll = kmm * 0.62137;
    document.getElementById("ml").value = mll;

}