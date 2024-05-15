let mesaj =
    `
Mağazımıza'a Xoş Gəldiniz
Birbank Kəşbek Kartınız var?
1-Bəli
2-Xeyr
`;

//335
const məhsullar = [
    {
        məhsulAdı: "Qulaqlıq",
        qiymət: 15
    },
    {
        məhsulAdı: "Fen",
        qiymət: 100
    },
    {
        məhsulAdı: "Ütü",
        qiymət: 220
    }
]


//true və ya false
let nəticə = confirm(mesaj);
let ödəniləcəkMəbləğ;

if (nəticə) {
    //Kəşbek kartı vardır
    let ad = prompt("Adınızı daxil edin :");
    let soyad = prompt("Soyadınızı daxil edin :");

    const müştəri = new Müştəri(ad, soyad, nəticə, məhsullar);

    ödəniləcəkMəbləğ = müştəri.hesabla();

    alert(
        `Müştəri Məlumatları : ${müştəri.getAd()} ${müştəri.getSoyad()}
        Ödəniləcək Məbləğ : ${ödəniləcəkMəbləğ}
        `);
}
else {
    const müştəri = new Müştəri(null, null, nəticə, məhsullar);
    ödəniləcəkMəbləğ = müştəri.hesabla();
    alert(`Ödəniləcək Məbləğ : ${ödəniləcəkMəbləğ}`)
}