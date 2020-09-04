function changeProductList(type, element){
    let tabs = document.getElementsByClassName("tab-item");
    // console.log(tabs);
    // tabs[2].style.background = "#d43f3f"
    for (let i=0; (i < tabs.length); i++){              //lấy màu đỏ gán vào class item
        tabs[i].style.background = "#d43f3f"
    }
    element.style.background = "blueviolet"; // this: chính nó nơi click sẽ đc gán màu xanh


    document.getElementById(type).style.display ="flex";
    switch (type){
        case "trend":
            document.getElementById("new").style.display ="none";
            document.getElementById("best-sell").style.display ="none";
            break;
        case "new":
            document.getElementById("trend").style.display ="none";
            document.getElementById("best-sell").style.display ="none";
            break;
        case "best-sell":
            document.getElementById("trend").style.display ="none";
            document.getElementById("new").style.display ="none";
            break;

    }



}