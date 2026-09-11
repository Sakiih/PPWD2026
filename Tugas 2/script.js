// MODE GELAP / TERANG

const tombolTema = document.getElementById("tombol-tema");
const bodyHalaman = document.body;

function ubahTema() {

    const modeGelapAktif =
        bodyHalaman.classList.toggle("mode-gelap");

    if (modeGelapAktif) {

        tombolTema.textContent = "Mode Terang";

    } else {

        tombolTema.textContent = "Mode Gelap";
    }
}

tombolTema.addEventListener("click", ubahTema);


// PENGHITUNG KARAKTER

const kolomPesan = document.getElementById("pesan");
const penghitung = document.getElementById("penghitung-karakter");

const batasKarakter = 200;

kolomPesan.addEventListener("input", function () {

    const jumlahKarakter = kolomPesan.value.length;

    penghitung.textContent =
        jumlahKarakter + " / " + batasKarakter + " karakter";

    if (jumlahKarakter >= 180) {

        penghitung.style.color = "red";

    } else {

        penghitung.style.color = "gray";
    }
});


// FORMULIR KONTAK

const formKontak = document.getElementById("form-kontak");
const pesanStatus = document.getElementById("pesan-status");

formKontak.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const pesan = document.getElementById("pesan").value;

    if (
        nama === "" ||
        email === "" ||
        whatsapp === "" ||
        pesan === ""
    ) {

        pesanStatus.textContent =
            "Mohon lengkapi semua data terlebih dahulu.";

        pesanStatus.style.color = "red";

    } else {

        pesanStatus.textContent =
            "Pesan berhasil dikirim. Terima kasih, " +
            nama +
            "!";

        pesanStatus.style.color = "green";

        console.log("Nama:", nama);
        console.log("Email:", email);
        console.log("WhatsApp:", whatsapp);
        console.log("Pesan:", pesan);
    }
});


// TOMBOL BERSIHKAN

const tombolReset = document.getElementById("tombol-reset");

tombolReset.addEventListener("click", function () {

    penghitung.textContent =
        "0 / 200 karakter";

    penghitung.style.color =
        "gray";

    pesanStatus.textContent = "";
});