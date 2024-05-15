class BirBankBase {
    endirim = 30;

    constructor(ad, soyad, kartVarmı, məhsullar) {
        this.ad = ad;
        this.soyad = soyad;
        this.kartVarmı = kartVarmı;
        this.məhsullar = məhsullar;
    }

    hesabla() {
        let ödəniləcəkMəbləğ = 0;
        if (this.məhsullarıKontrolEt(this.məhsullar)) {

            //(100 * 50)/100    = 5000/100

            //Səbətim dolu
            if (this.kartVarmı) {
                //Kəşbek kartı vardır
                this.məhsullar.forEach((məhsul) => {
                    ödəniləcəkMəbləğ += (məhsul.qiymət * (100 - this.endirim) / 100);
                })
            }
            else {
                //Yoxdur
                this.məhsullar.forEach((məhsul) => {
                    ödəniləcəkMəbləğ += məhsul.qiymət;
                })
            }

        }
        else {
            alert("Ən az bir məhsul almalısınız");
        }
        return ödəniləcəkMəbləğ + " AZN ";
    };


    məhsullarıKontrolEt(məhsullar) {
        if (məhsullar != null && məhsullar.length > 0) {
            return true;
        }
        return false;
    };

    getAd() {
        return this.ad;
    };

    getSoyad() {
        return this.soyad;
    };
};