const contant = document.querySelector('.container');
//judul
document.body.style.backgroundColor = '#F0F0F0'
document.body.style.color = 'white'


document.body.className = ''
const judul = document.querySelector('.tittle');
judul.innerHTML = "DATA MAHASISWA";
judul.className = 'text-center fw-bold mt-5 font-sans fs-1'


//paragraf 
const header = document.querySelector(".header");
const p = document.createElement('p');
const pBaru = document.createTextNode("Program Sederhana Yang Dapat Menginput Nama, Universitas, dan Jumlah SKS");
p.appendChild(pBaru)
header.append(p)
p.className = 'text-center fw-border font-sans'

//tombol masukkan
const button1 = document.querySelector('.masukkan');
let daftar = [
    
];
let npm = document.getElementById('npm')
let mahasiswa= document.getElementById('mahasiswa')

let university = document.getElementById('university')
let jumlahSKS = document.getElementById('jumlahSKS')
button1.addEventListener('click',function run(){
    authAdd(); //fungsi cek data dan menambahkan data
})
function refresh(){
    npm.value=""
    mahasiswa.value = ""
    university.value=""
    jumlahSKS.value=""
}

function authAdd(){

    if(mahasiswa.value=="" || university.value =="" || jumlahSKS.value=="" || npm.value ==""){
        Swal.fire({
            icon: 'error',
            title:'Waduh..',
            text:'isi data dulu'
        })
    }else{
        Swal.fire({
            icon: 'success',
            title:'OKE',
            text:'data disimpan'
        })
        let Npm = npm.value
        let nama = mahasiswa.value;
        let kampus = university.value;
        let sks = jumlahSKS.value;
        let list = {
            'id':Npm,
            'nama':nama,
            'kampus':kampus,
            'sks':sks

        }
        daftar.push(list)
        console.log(daftar)
        refresh()
    }
}
let inputCari = document.getElementById('cari')


let tombol = document.getElementsByClassName('cari')[0].addEventListener('click',(e)=>{
    alert('hai')
   
    
})

function cek(){
    let data = inputCari.value;
    for(let i=0;i<daftar.length;i++){
        if(daftar[i].id===data){
            let form = document.getElementsByClassName('data')[0];
            let p = document.createElement('p');
            p.innerHTML = daftar[i].id + ' ' + daftar[i].nama;
            form.append(p)
            
        }else if(daftar[i].id!==data){
            console.log('data tidak ditemukan')

            
        }
        
    }
    

}






