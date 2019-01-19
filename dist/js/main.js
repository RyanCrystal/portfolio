console.log("hello11");

const cate = document.querySelectorAll(".category");
const pro_items = document.querySelectorAll(".projects_items");

// switch button tabs and get color
for (let i = 0; i < cate.length && i < pro_items.length; i++) {
  cate[i].addEventListener("click", function() {
    for (let i = 0; i < cate.length && i < pro_items.length; i++) {
      cate[i].classList.remove("active");
      pro_items[i].classList.remove("active");
    }
    cate[i].classList.add("active");
    pro_items[i].classList.add("active");
  });
}
