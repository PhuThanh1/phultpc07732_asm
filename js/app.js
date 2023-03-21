var datalist = [
  {
    id: 1,
    ten: "Balo chống gù 850",
    gia: 399000,
    hinhanh: "balomrvui.webp",
    chatlieu: "vair polyester",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
  {
    id: 2,
    ten: "Balo Mr teen 916",
    gia: 399000,
    hinhanh: "balomrvui1.webp",
    chatlieu: "vair polyester",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
  {
    id: 3,
    ten: "Balo học sinh 913",
    gia: 375000,
    hinhanh: "balomrvui2.webp",
    chatlieu: "vải kaki",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
  {
    id: 4,
    ten: "Balo teen 825",
    gia: 87500,
    hinhanh: "balomrvui3.webp",
    chatlieu: "vair polyester",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
  {
    id: 5,
    ten: "Balo học sinh 915",
    gia: 445000,
    hinhanh: "balomrvui4.webp",
    chatlieu: "vair polyester",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
  {
    id: 6,
    ten: "Balo học sinh 914",
    gia: 398000,
    hinhanh: "balomrvui5.webp",
    chatlieu: "vair polyester",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
  {
    id: 6,
    ten: "Balo chống gù 926",
    gia: 595000,
    hinhanh: "balomrvui6.webp",
    chatlieu: "vair polyester",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
  {
    id: 7,
    ten: "Balo chống gù 927",
    gia: 545000,
    hinhanh: "balomrvui7.webp",
    chatlieu: "vair polyester",
    khoiluong: "0.78kg",
    kichthuoc: "38 x 28 x 15 cm",
    soluong: 1
  },
];

let htmlProduct = "";
for (let i = 0; i < datalist.length; i++) {
  console.log(datalist[i].ten);
  htmlProduct += `
<article>
  <div class="khung">
    <div class="cot">
      <div class="sp">
        <h2>${datalist[i].ten}</h2>
        <a href="chitietsp.html"><img class="anhsp" src="images/${datalist[i].hinhanh}" /></a>
        <h3>${datalist[i].gia}vnđ</h3>
        <button>Mua</button>
        <div class="icongiohang"><img src="images/icongiohang.png" title="Thêm vào giỏ hàng" alt=""></div>
      </div>
    </div>
  </div>
</article>
  `;
}
document.getElementById("listProduct").innerHTML = htmlProduct;










