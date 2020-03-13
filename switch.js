
var pesan = prompt('Selamat Datang Di Bebek Congratulations ! Silahkan Pilih Menu Anda : \n1. Bebek Goreng.\n2. Ayam Goreng.\n3. Ikan Goreng');


var pilih = 0;
var harga = 0;
var qty = 0;
var total = 0;

switch(pesan) {
    case '1':
        harga=20000;
        var qty= parseInt(prompt('Berapa Jumlah Pesananya? :'));
        total=harga*qty;
        alert('Total Pesanan Kamu : Rp. '+total+'.');
    break;

    case '2':
    harga=15000;
    var qty= parseInt(prompt('Berapa Jumlah Pesananya? :'));
    total=harga*qty;
    alert('Total Pesanan Kamu : Rp. '+total+'.');
    break;

    case '3':
    harga=10000;
    var qty= parseInt(prompt('Berapa Jumlah Pesananya? :'));
    total=harga*qty;
    alert('Total Pesanan Kamu : Rp. '+total+'.');
    break;

}