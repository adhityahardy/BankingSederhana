function Mahasiswa(nama, jurusan){
    this.nama = nama;
    this.jurusan = jurusan;
    this.sapa = function(){
        console.log("Halo, nama saya "+this.nama+" dari jurusan "+this.jurusan);
    
    }
}

let mahasiswa1 = new Mahasiswa("Alice", "Informatika");
let mahasiswa2 = new Mahasiswa("Bob", "Ekonomi");

mahasiswa1.sapa()
mahasiswa2.sapa()