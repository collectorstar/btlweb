//input search
var inputsearch = document.getElementsByClassName("input-search")[0];
var headerSearch = document.getElementsByClassName("headerSearch")[0];
var searchclick = 0

inputsearch.style.border = 0
inputsearch.style.padding = 0
inputsearch.style.width = 0
searchclick = 1

function clicksearch() {
  if (searchclick == 0) {
    inputsearch.style.border = 0
    inputsearch.style.padding = 0
    inputsearch.style.width = 0
    searchclick = 1
    inputsearch.value = ""
  }
  else {
    inputsearch.style = "width: 306px;height: 36px;border-radius: 50px;padding: 0 20px;"
    searchclick = 0
  }
}

//slide
var slides = document.getElementsByClassName("info-title-slide");
var dots = document.getElementsByClassName("dotSlide");
var sindex = 0;
runslides();

function supportSlide() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
}

function pushSlide(n) {
  supportSlide();
  sindex = sindex + n;
  if (sindex > slides.length) {
    sindex = 1;
  }
  if (sindex <= 0) {
    sindex = slides.length;
  }
  slides[sindex - 1].style.display = "block";
  dots[sindex - 1].className += " activeSlide";
}

function SlideCurrent(n) {
  supportSlide();
  sindex = n;
  slides[sindex - 1].style.display = "block";
  dots[sindex - 1].className += " activeSlide";
}

function runslides() {
  supportSlide();
  sindex++;
  if (sindex > slides.length) {
    sindex = 1;
  }
  slides[sindex - 1].style.display = "block";
  dots[sindex - 1].className += " activeSlide";
  setTimeout(runslides, 4000);
}

// hot-new
var hotNews = document.querySelectorAll(".hot-new-item");
var hotNewIndex = 0;
runHotNew();

function supportHotnew() {
  let i;
  for (i = 0; i < hotNews.length; i++) {
    hotNews[i].style.display = "none";
  }
}

function pushHotnew(n) {
  supportHotnew();
  hotNewIndex += n;
  if (hotNewIndex == hotNews.length - 1) {
    hotNewIndex = 1;
  }
  if (hotNewIndex == 0) {
    hotNewIndex = hotNews.length - 2
  }
  hotNews[hotNewIndex - 1].style.display = "block";
  hotNews[hotNewIndex].style.display = "block";
  hotNews[hotNewIndex + 1].style.display = "block";
}

function runHotNew() {
  supportHotnew();
  hotNewIndex++;
  if (hotNewIndex == hotNews.length - 1) {
    hotNewIndex = 1;
  }
  hotNews[hotNewIndex - 1].style.display = "block";
  hotNews[hotNewIndex].style.display = "block";
  hotNews[hotNewIndex + 1].style.display = "block";
  setTimeout(runHotNew, 5000);
}

//partner
var partners = document.querySelectorAll(".item-partner");
var partnerIndex = 0;
runPartner();
function supportPartner() {
  let i;
  for (i = 0; i < partners.length; i++) {
    partners[i].style.display = "none";
  }
}

function pushPartner(n) {
  supportPartner();
  partnerIndex += n;
  if (partnerIndex == (partners.length - 4)) {
    partnerIndex = 1;
  }
  if (partnerIndex == 0) {
    partnerIndex = partners.length - 5
  }
  partners[partnerIndex - 1].style.display = "block";
  partners[partnerIndex].style.display = "block";
  partners[partnerIndex + 1].style.display = "block";
  partners[partnerIndex + 2].style.display = "block";
  partners[partnerIndex + 3].style.display = "block";
  partners[partnerIndex + 4].style.display = "block";
}

function runPartner() {
  supportPartner();
  partnerIndex++;
  if (partnerIndex == partners.length - 4) {
    partnerIndex = 1;
  }
  partners[partnerIndex - 1].style.display = "block";
  partners[partnerIndex].style.display = "block";
  partners[partnerIndex + 1].style.display = "block";
  partners[partnerIndex + 2].style.display = "block";
  partners[partnerIndex + 3].style.display = "block";
  partners[partnerIndex + 4].style.display = "block";
  setTimeout(runHotNew, 6000);
}

// criteria
var count = document.querySelectorAll(".count");
var arrcount = [];

for (let i = 0; i < count.length; i++) {
  arrcount[i] = count[i].innerText;
  count[i].innerText = "1";
}

var count1 = null
count1 = setInterval(runCount1, 80);
function runCount1() {
  let a = Number(count[0].innerText);
  if (Number(count[0].innerText) < Number(arrcount[0])) {
    a++;
    count[0].innerText = a;
  }
  else {
    clearInterval(count1)
  }
}

var count2 = null
count2 = setInterval(runCount2, 100);
function runCount2() {
  let a = Number(count[1].innerText);
  if (Number(count[1].innerText) < Number(arrcount[1])) {
    a++;
    count[1].innerText = a;
  }
  else {
    clearInterval(count2)
  }
}

var count3 = null
count3 = setInterval(runCount3, 200);
function runCount3() {
  let a = Number(count[2].innerText);
  if (Number(count[2].innerText) < Number(arrcount[2])) {
    a++;
    count[2].innerText = a;
  }
  else {
    clearInterval(count3)
  }
}

var count4 = null
count4 = setInterval(runCount4, 250);
function runCount4() {
  let a = Number(count[3].innerText);
  if (Number(count[3].innerText) < Number(arrcount[3])) {
    a++;
    count[3].innerText = a;
  }
  else {
    clearInterval(count4)
  }
}