console.log("hello11");

const cate = document.querySelectorAll(".filter");
const pro_items = document.querySelectorAll(".projects_items");

// window.resize(function() {
//   console.log("window was resized");
// });
// switch button tabs and get color
for (let i = 0; i < cate.length && i < pro_items.length; i++) {
  cate[i].addEventListener("click", function() {
    for (let i = 0; i < cate.length && i < pro_items.length; i++) {
      cate[i].classList.remove("active");
      pro_items[i].classList.remove("active");
    }
    cate[i].classList.add("active");
    pro_items[i].classList.add("active");
    if (i !== 0 && window.innerWidth > 1170) {
      // pro_items[i].style.gridTemplateColumns = "repeat(2, 1fr)";
      pro_items[i].style.margin = "auto";
      pro_items[i].style.width = "80%";
    }
  });
}
const filter_all = document.querySelectorAll(".filter[data-filter='all']");
const filter_bs = document.querySelectorAll(".filter[data-filter='bs']");
const filter_js = document.querySelectorAll(".filter[data-filter='js']");
const filter_php = document.querySelectorAll(".filter[data-filter='php']");

filter_all[0].addEventListener("click", function() {
  document.querySelector(".float-bar").style.left = "0px";
  document.querySelector(".float-bar>.flex.row").style.left = "0px";
});
filter_bs[0].addEventListener("click", function() {
  document.querySelector(".float-bar").style.left = "186.925px";
  document.querySelector(".float-bar>.flex.row").style.left = "-186.925px";
});
filter_js[0].addEventListener("click", function() {
  document.querySelector(".float-bar").style.left = "388.387px";
  document.querySelector(".float-bar>.flex.row").style.left = "-388.387px";
});
filter_php[0].addEventListener("click", function() {
  document.querySelector(".float-bar").style.left = "621.875px";
  document.querySelector(".float-bar>.flex.row").style.left = "-621.875px";
});

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");
