function menu() {
  var btn = document.getElementById("menu");
  var btn1 = document.getElementById("menu_open");
  var btn2 = document.getElementById("menu_close");
  btn1.style.display = "none";
  btn2.style.display = "block";
  btn.style.display = "block";
}
function close_menu() {
  var cl = document.getElementById("menu");
  var btn1 = document.getElementById("menu_open");
  var btn2 = document.getElementById("menu_close");
  btn1.style.display = "block";
  btn2.style.display = "none";
  cl.style.display = "none";
}
function signs() {
  var img = document.getElementById("image1");
  var img1 = document.getElementById("img1");
  var form = document.getElementById("form");
  var login = document.getElementById("login-box");
  var imgs = document.getElementById("image0");
  var img0 = document.getElementById("img0");
  var navsignin = document.getElementById("sign1");
  var navsignup = document.getElementById("sign");
  navsignup.style.display="none";
  navsignin.style.display="block";
  
  img0.style.display = "block";
  login.style.display = "none";
  imgs.style.display = "block";
  img.style.display = "none";
  img1.style.display = "none";
  form.style.display = "block";
  event.preventDefault();

}
function sign1(){
  var img = document.getElementById("image1");
  var img1 = document.getElementById("img1");
  var form = document.getElementById("form");
  var login = document.getElementById("login-box");
  var imgs = document.getElementById("image0");
  var img0 = document.getElementById("img0");
  var navsignin = document.getElementById("sign1");
  var navsignup = document.getElementById("sign");
  navsignup.style.display="block";
  navsignin.style.display="none";
  img0.style.display = "none";
  login.style.display = "block";
  imgs.style.display = "none";
  img.style.display = "block";
  img1.style.display = "block";
  form.style.display = "none";
  event.preventDefault();
}
function signsin() {
  var img = document.getElementById("image1");
  var img1 = document.getElementById("img1");
  var form = document.getElementById("form");
  var login = document.getElementById("login-box");
  var imgs = document.getElementById("image0");
  var img0 = document.getElementById("img0");
  var navsignin = document.getElementById("sign1");
  var navsignup = document.getElementById("sign");
  navsignup.style.display="block";
  navsignin.style.display="none";
  img0.style.display = "none";
  login.style.display = "block";
  imgs.style.display = "none";
  img.style.display = "block";
  img1.style.display = "block";
  form.style.display = "none";
  event.preventDefault();

}
function scrolll() {
  window.scrollTo(0, 1200);
  event.preventDefault();
}
function sybmitform(){
  
}
