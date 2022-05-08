    var paragraph_1 = document.getElementById("paragraph_1");
        paragraph_1.onclick = function() {
        paragraph_1.classList.toggle("paragraph_1_theme");
    }

    var paragraph_2 = document.querySelector("#paragraph_2");
        paragraph_2.onclick = function() {
        paragraph_2.classList.toggle("paragraph_2_theme");
    }      
    
    var element = document.getElementById("city");
    var add_btn = document.getElementById("add_btn");
    var zoom_in_btn = document.getElementById("zoom_in_btn");
    var zoom_out_btn = document.getElementById("zoom_out_btn");
    var delete_btn = document.getElementById("delete_btn");
    var zoom = 1;

    add_btn.addEventListener("click", () => {
        element.innerHTML += '<p class="city_images"><a href="https://www.city.kharkov.ua"><img src="kharkiv.jpg" alt="kharkiv" width="512" height="341"></a></p>';
        zoom = 1;
        window.scrollTo(0,9999);
    });

    delete_btn.addEventListener("click", ()=> {
        var added_images = document.querySelectorAll(".city_images");
        var last = added_images[added_images.length-1];
        added_images.length>1 ? last.remove() : alert ("А не можна більше видаляти!");
    });

    zoom_in_btn.addEventListener("click", ()=> {
        zoom < 2 ? zoom += 0.1 : alert ("А не можна більше збільшувати!");
        var city_images = document.querySelectorAll(".city_images");
        city_images[city_images.length-1].style.zoom = zoom;
        window.scrollTo(0,9999);
    });

    zoom_out_btn.addEventListener("click", ()=> {
        zoom >= 0.5 ? zoom -= 0.1 : alert ("А не можна більше зменшувати!");
        var city_images = document.querySelectorAll(".city_images");
        city_images[city_images.length-1].style.zoom = zoom;
    });