const hh = document.querySelector("#hh");
const mh = document.querySelector("#mh");
const sh = document.querySelector("#sh");
function time() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hh.innerHTML = h + " ";
  mh.innerHTML = m + " ";
  sh.innerHTML = s;
}
setInterval(time, 1000);
time();
