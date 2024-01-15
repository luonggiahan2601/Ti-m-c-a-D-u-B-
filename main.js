var object={
  hoTen:"",
  soDienThoai:"",
  yeucau:"",
  tenMonHang:"",
  giaTien:""
}

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");

function showAlert(message) {
    alert(message);
}

btn1.addEventListener("click", function() {
    showAlert("Sản phẩm Kẹo ngọt Táo Xanh đã được thêm vào giỏ hàng!");
object.tenMonHang="mua mon hang so 1";
object.giaTien="14.000VND";

});

btn2.addEventListener("click", function() {
    showAlert("Sản phẩm Kẹo ngọt Nho đã được thêm vào giỏ hàng!");
object.tenMonHang="mua mon hang so 2";
object.giaTien="14.000VND";
    
});

btn3.addEventListener("click", function() {
    showAlert("Sản phẩm Kẹo ngọt Dưa Hấu đã được thêm vào giỏ hàng!");
object.tenMonHang="mua mon hang so 3";
object.giaTien="14.000VND";

});

btn4.addEventListener("click", function() {
    showAlert("Sản phẩm Swetie Đỏ đã được thêm vào giỏ hàng!");
object.tenMonHang="mua mon hang so 4";
object.giaTien="14.000VND";

});

btn5.addEventListener("click", function() {
    showAlert("Sản phẩm Swetie Hồng đã được thêm vào giỏ hàng!");
object.tenMonHang="mua mon hang so 5";
object.giaTien="14.000VND";

});

btn6.addEventListener("click", function() {
    showAlert("Sản phẩm Swetie Xanh đã được thêm vào giỏ hàng!");
object.tenMonHang="mua mon hang so 6";
object.giaTien="14.000VND";

});

 btn7.addEventListener("click", function() {
    showAlert("Thông tin đã được ghi nhận!!!!");
});
$("#btn-8").on("click",function(){
  showAlert("Đã đặt đơn hàng thành công");
  console.log(object)
 })


function handleButtonHover() {
    const buttons = document.querySelectorAll('.btn-hover');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'gray';
        button.style.transition = 'background-color 0.1s';
      });
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'blue';
        button.style.transition = 'background-color 0.1s';
      });
    });
  }
  
  handleButtonHover();
  
  