var tanya = true;
while (tanya) {

    // menangkap pilihan player
    var p = prompt('Pilih : gajah, semut, orang (Dengan Huruf Pertama Besar)');


    // menangkap pilihan computer

    // membangkitkan bilangan random
    var com = Math.random();

    if (com < 0.34 ) {
        com = 'Gajah';
    } else if (com >= 0.34 && com < 0.67)  {
        com = 'Orang';
    } else {
        com = 'Semut';
    }

    console.log(com);

    var hasil = '';
    // menentukan rules
    if( p == com) {
        hasil='Seri';    
    } else if( p == 'Gajah'){
        // if (com == 'Orang') {
        //     hasil='Menang';
        // } else {
        //     hasil='Kalah';
        // }
        hasil = ( com == 'Orang' ? 'Menang' : 'Kalah');

    } else if ( p == 'Orang') {
        if ( com == 'Gajah') {
            hasil = 'Kalah';
        } else {
            hasil = 'Menang';
        }

    } else if (p == 'Semut') {
        hasil = ( com == 'Orang' ? 'Kalah' : 'Menang');
    } else {
        hasil = 'Memasukan Pilihan Yang Salah'
    }

    // tampilkan hasil

    alert('Kamu Memilih '+p+', dan Komputer Memilih '+com+'\nMaka Hasilnya Adalah : \n\n Kamu '+hasil+'!!!');

    tanya = confirm ('Ulang Lagi?');
}

alert('Terimakasih Sudah Bermain');