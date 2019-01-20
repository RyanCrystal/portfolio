const cate = document.querySelectorAll(".filter");
const pro_items = document.querySelectorAll(".projects_items");

// switch button tabs and get color
function removeAllActive() {
  for (let i = 0; i < cate.length && i < pro_items.length; i++) {
    // cate[i].classList.remove("active");
    pro_items[i].classList.remove("active");
  }
}
function triggerProject() {
  for (let i = 0; i < cate.length && i < pro_items.length; i++) {
    cate[i].addEventListener("click", function() {
      removeAllActive();

      // cate[i].classList.add("active");
      pro_items[i].classList.add("active");
      if (i !== 0 && window.innerWidth > 1170) {
        pro_items[i].style.gridTemplateColumns = "repeat(2, 1fr)";
        // pro_items[i].style.margin = "auto";
        // pro_items[i].style.width = "70%";
      }
    });
  }
}
function switchColor() {
  const filter_all = document.querySelectorAll(".filter[data-filter='all']");
  const filter_bs = document.querySelectorAll(".filter[data-filter='bs']");
  const filter_js = document.querySelectorAll(".filter[data-filter='js']");
  const filter_php = document.querySelectorAll(".filter[data-filter='php']");
  const all_left_dist = cate[0].offsetLeft;
  const bs_left_dist = cate[1].offsetLeft;
  const js_left_dist = cate[2].offsetLeft;
  const php_left_dist = cate[3].offsetLeft;

  const all_width = cate[0].offsetWidth;
  const bs_width = cate[1].offsetWidth;
  const js_width = cate[2].offsetWidth;
  const php_width = cate[3].offsetWidth;
  document.querySelector(".float-bar").style.left = all_left_dist + "px";
  document.querySelector(".float-bar").style.width = all_width + "px";
  document.querySelector(".float-bar>.flex.row").style.left =
    "-" + all_left_dist + "px";
  removeAllActive();
  pro_items[0].classList.add("active");

  filter_all[0].addEventListener("click", function() {
    document.querySelector(".float-bar").style.left = all_left_dist + "px";
    document.querySelector(".float-bar").style.width = all_width + "px";
    document.querySelector(".float-bar>.flex.row").style.left =
      "-" + all_left_dist + "px";
  });
  filter_bs[0].addEventListener("click", function() {
    document.querySelector(".float-bar").style.left = bs_left_dist + "px";
    document.querySelector(".float-bar").style.width = bs_width + "px";
    document.querySelector(".float-bar>.flex.row").style.left =
      "-" + bs_left_dist + "px";
  });
  filter_js[0].addEventListener("click", function() {
    document.querySelector(".float-bar").style.left = js_left_dist + "px";
    document.querySelector(".float-bar").style.width = js_width + "px";
    document.querySelector(".float-bar>.flex.row").style.left =
      "-" + js_left_dist + "px";
  });
  filter_php[0].addEventListener("click", function() {
    document.querySelector(".float-bar").style.left = php_left_dist + "px";
    document.querySelector(".float-bar").style.width = php_width + "px";
    document.querySelector(".float-bar>.flex.row").style.left =
      "-" + php_left_dist + "px";
  });
}

function displayProItems() {
  if (window.innerWidth < 769) {
    for (let i = 0; i < pro_items.length; i++) {
      pro_items[i].style.gridTemplateColumns = "repeat(1, 1fr)";
    }
  } else if (window.innerWidth >= 769 && window.innerWidth < 1170) {
    for (let i = 0; i < pro_items.length; i++) {
      pro_items[i].style.gridTemplateColumns = "repeat(2, 1fr)";
    }
  } else if (window.innerWidth >= 1170) {
    pro_items[0].style.gridTemplateColumns = "repeat(3, 1fr)";
  }
}

function resize() {
  displayProItems();
  switchColor();
}

function init() {
  triggerProject();
  switchColor();
  displayProItems();
  window.onresize = resize;
}
init();

// }
