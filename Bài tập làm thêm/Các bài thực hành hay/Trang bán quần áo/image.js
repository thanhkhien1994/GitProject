function changeImage(id){
    let photo = document.getElementById(id).getAttribute("src");
    document.getElementById("img").setAttribute("src",photo);


}