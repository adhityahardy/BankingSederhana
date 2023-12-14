function atas(baris){
    if(kondisi = 'bawah'){
        for (let i=baris; i>= 1; i--){
            let spasi = ' '.repeat(baris - i);
            let bintang = '*'.repeat(i);
            console.log(spasi + bintang)
        }
    } else {
        for (let i=1; i<=baris;i++){
            let spasi = ' '.repeat(baris - i);
            let bintang = '*'.repeat(i);
            console.log(spasi+bintang);
        }
    }
}


atas(4, 'bawah');
