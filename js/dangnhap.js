// đăng nhập
$("#submit").click(function() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (user === null) {
      alert("Vui lòng nhập username và password");
    }
    else if (username === data.username && email === data.email && password === data.password) {
      alert("Bạn đã đăng nhập thành công!");
      window.location.href="product.html";
    }
    else{
      alert("Đăng nhập thất bại!");
    }
  })