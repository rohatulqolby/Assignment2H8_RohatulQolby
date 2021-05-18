const nama = document.getElementById("nama");
const role = document.getElementById("role");
const availability = document.getElementById("availability");
const usia = document.getElementById("usia");
const lokasi = document.getElementById("lokasi");
const pengalaman = document.getElementById("pengalaman");
const email = document.getElementById("email");

var namaBaru=nama.innerHTML;
var roleBaru=role.innerHTML;
var availabilityBaru=availability.innerHTML;
var usiaBaru=usia.innerHTML;
var lokasiBaru=lokasi.innerHTML;
var pengalamanBaru=pengalaman.innerHTML;
var emailBaru=email.innerHTML;


const namaTabel = document.getElementById("namaTabel");
namaTabel.value = namaBaru;
const roleTabel = document.getElementById("roleTabel");
roleTabel.value = roleBaru;
const availabilityTabel = document.getElementById("availabilityTabel");
availabilityTabel.value = availabilityBaru;
const usiaTabel = document.getElementById("usiaTabel");
usiaTabel.value = usiaBaru;
const lokasiTabel = document.getElementById("lokasiTabel");
lokasiTabel.value = lokasiBaru;
const pengalamanTabel = document.getElementById("pengalamanTabel");
pengalamanTabel.value = pengalamanBaru;
const emailTabel = document.getElementById("emailTabel");
emailTabel.value = emailBaru;

// const submit = document.getElementById("submit");
function ubah(){    
    nama.innerText=namaTabel.value;
    role.innerText=roleTabel.value;
    availability.innerText=availabilityTabel.value;
    usia.innerText=usiaTabel.value;
    lokasi.innerText=lokasiTabel.value;
    pengalaman.innerText=pengalamanTabel.value;
    email.innerText=emailTabel.value;
}


