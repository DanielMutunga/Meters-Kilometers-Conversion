

function lengthMeters(){
    var rate = 0.001;
    var Input = document.getElementById("length").value;
    var convertion = rate * Input;
    document.getElementById("result").innerText = convertion + " Kilometers";
}
document.getElementById("calculate").onclick = lengthMeters