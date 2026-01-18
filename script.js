function cekJawaban() {
    let skor = 0;
    let form = document.getElementById("formKuis");
    let data = new FormData(form);

    for (let nilai of data.values()) {
        skor += parseInt(nilai);
    }

    if (skor >= 70) {
        document.getElementById("hasil").innerHTML =
            "Skor kamu: " + skor + "<br>Status: LULUS";
    } else {
        document.getElementById("hasil").innerHTML =
            "Skor kamu: " + skor + "<br>Status: TIDAK LULUS";
    }
}

function ulang() {
    document.getElementById("formKuis").reset();
    document.getElementById("hasil").innerHTML = "";
}