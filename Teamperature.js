function Teamperature(C) {
    thisC = C;
    this.getF =function () {
        F= (C*1.8)+32;
        return F;

    }
    this.getKevin = function () {
        Kevin = C +273;
        return Kevin;

    }
}
let n = +prompt("nhap gia tri do C")
let C= new Teamperature(n);
let f =C.getF();
let kevin =C.getKevin();
document.write("Giá trị chuyển đổi từ độ C sang độ F = " + f +"<br>" + "Giá trị chuyển đổi từ độ C sang độ kevin = " +kevin);

