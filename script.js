let sound_btn = document.getElementById("volume_icon_div"); 
let slider_main_animation = document.getElementsByClassName("wrapper")[0];
let left_arrow = document.getElementById("main_slider_left_arrow");
let right_arrow = document.getElementById("main_slider_right_arrow");
let img_1 = document.getElementById("img_main_1");
let img_2 = document.getElementById("img_main_2");
let img_3 = document.getElementById("img_main_3");
let img_4 = document.getElementById("img_main_4");
let img_5 = document.getElementById("img_main_5");
let slider_poin_1 = document.getElementsByClassName("point1")[0];
let slider_poin_2 = document.getElementsByClassName("point2")[0];
let slider_poin_3 = document.getElementsByClassName("point3")[0];
let slider_poin_4 = document.getElementsByClassName("point4")[0];
let slider_poin_5 = document.getElementsByClassName("point5")[0];
let audio = new Audio("videos/victrix video.mp4");
let x_position = 0;
/* */
let is_mute = "true";
let counter = 2;
function sound(){  
    if(is_mute == "true" && counter %2 == 0){
        is_mute = "false";
        audio.play();
        audio.loop = true;
        sound_btn.innerHTML = "<i class='fa-solid fa-volume-high fa-xl'></i>";
    }
    if(is_mute == "false" && counter %4 == 0){
        is_mute = "true";
        audio.pause();
        sound_btn.innerHTML = "<i class='fa-solid fa-volume-xmark fa-xl'></i>";
       
    }
    counter += 2;
}
sound_btn.addEventListener("click",sound);

function slider(){
    left_arrow.addEventListener("click",function(){
        if(x_position < 0){
            x_position += 100;
        }
        slider_main_animation.style.animation = "paused";
        slider_poin_1.style.animation = "paused";
        slider_poin_2.style.animation = "paused";
        slider_poin_3.style.animation = "paused";
        slider_poin_4.style.animation = "paused";
        slider_poin_5.style.animation = "paused";
        img_1.style.transform = "translateX(" + x_position + "%)";
        img_2.style.transform = "translateX(" + x_position + "%)";
        img_3.style.transform = "translateX(" + x_position + "%)";
        img_4.style.transform = "translateX(" + x_position + "%)";
        img_5.style.transform = "translateX(" + x_position + "%)";
        if(x_position == 0){
            slider_poin_1.style.opacity = "1";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "0.4";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "0.4";
        }else if(x_position == -100){
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "1";
            slider_poin_3.style.opacity = "0.4";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "0.4";
        }else if(x_position == -200){
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "1";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "0.4";
        }else if(x_position == -300){
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "0.4";
            slider_poin_4.style.opacity = "1";
            slider_poin_5.style.opacity = "0.4";
        }else{
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "1";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "1";
        }
    });
    right_arrow.addEventListener("click",function(){
        if(x_position > -400){
            x_position -= 100;
        }
        slider_main_animation.style.animation = "paused";
        slider_poin_1.style.animation = "paused";
        slider_poin_2.style.animation = "paused";
        slider_poin_3.style.animation = "paused";
        slider_poin_4.style.animation = "paused";
        slider_poin_5.style.animation = "paused";
        img_1.style.transform = "translateX(" + x_position + "%)";
        img_2.style.transform = "translateX(" + x_position + "%)";
        img_3.style.transform = "translateX(" + x_position + "%)";
        img_4.style.transform = "translateX(" + x_position + "%)";
        img_5.style.transform = "translateX(" + x_position + "%)";
        if(x_position == 0){
            slider_poin_1.style.opacity = "1";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "0.4";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "0.4";
        }else if(x_position == -100){
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "1";
            slider_poin_3.style.opacity = "0.4";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "0.4";
        }else if(x_position == -200){
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "1";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "0.4";
        }else if(x_position == -300){
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "0.4";
            slider_poin_4.style.opacity = "1";
            slider_poin_5.style.opacity = "0.4";
        }else{
            slider_poin_1.style.opacity = "0.4";
            slider_poin_2.style.opacity = "0.4";
            slider_poin_3.style.opacity = "0.4";
            slider_poin_4.style.opacity = "0.4";
            slider_poin_5.style.opacity = "1";
        }
    });
}
slider();

function point_slider(){
    slider_poin_1.addEventListener("click",function(){
        x_position = 0;

        slider_poin_1.style.opacity = "1";
        slider_poin_2.style.opacity = "0.4";
        slider_poin_3.style.opacity = "0.4";
        slider_poin_4.style.opacity = "0.4";
        slider_poin_5.style.opacity = "0.4";

        img_1.style.transform = "translateX(" + x_position + "%)";
        img_2.style.transform = "translateX(" + x_position + "%)";
        img_3.style.transform = "translateX(" + x_position + "%)";
        img_4.style.transform = "translateX(" + x_position + "%)";
        img_5.style.transform = "translateX(" + x_position + "%)";
        slider_main_animation.style.animation = "paused";
        slider_poin_1.style.animation = "paused";
        slider_poin_2.style.animation = "paused";
        slider_poin_3.style.animation = "paused";
        slider_poin_4.style.animation = "paused";
        slider_poin_5.style.animation = "paused";
    })
    slider_poin_2.addEventListener("click",function(){
        x_position = -100;

        slider_poin_1.style.opacity = "0.4";
        slider_poin_2.style.opacity = "1";
        slider_poin_3.style.opacity = "0.4";
        slider_poin_4.style.opacity = "0.4";
        slider_poin_5.style.opacity = "0.4";

        img_1.style.transform = "translateX(" + x_position + "%)";
        img_2.style.transform = "translateX(" + x_position + "%)";
        img_3.style.transform = "translateX(" + x_position + "%)";
        img_4.style.transform = "translateX(" + x_position + "%)";
        img_5.style.transform = "translateX(" + x_position + "%)";
        slider_main_animation.style.animation = "paused";
        slider_poin_1.style.animation = "paused";
        slider_poin_2.style.animation = "paused";
        slider_poin_3.style.animation = "paused";
        slider_poin_4.style.animation = "paused";
        slider_poin_5.style.animation = "paused";
    })
    slider_poin_3.addEventListener("click",function(){
        x_position = -200;

        slider_poin_1.style.opacity = "0.4";
        slider_poin_2.style.opacity = "0.4";
        slider_poin_3.style.opacity = "1";
        slider_poin_4.style.opacity = "0.4";
        slider_poin_5.style.opacity = "0.4";

        img_1.style.transform = "translateX(" + x_position + "%)";
        img_2.style.transform = "translateX(" + x_position + "%)";
        img_3.style.transform = "translateX(" + x_position + "%)";
        img_4.style.transform = "translateX(" + x_position + "%)";
        img_5.style.transform = "translateX(" + x_position + "%)";
        slider_main_animation.style.animation = "paused";
        slider_poin_1.style.animation = "paused";
        slider_poin_2.style.animation = "paused";
        slider_poin_3.style.animation = "paused";
        slider_poin_4.style.animation = "paused";
        slider_poin_5.style.animation = "paused";
    })
    slider_poin_4.addEventListener("click",function(){
        x_position = -300;

        slider_poin_1.style.opacity = "0.4";
        slider_poin_2.style.opacity = "0.4";
        slider_poin_3.style.opacity = "0.4";
        slider_poin_4.style.opacity = "1";
        slider_poin_5.style.opacity = "0.4";

        img_1.style.transform = "translateX(" + x_position + "%)";
        img_2.style.transform = "translateX(" + x_position + "%)";
        img_3.style.transform = "translateX(" + x_position + "%)";
        img_4.style.transform = "translateX(" + x_position + "%)";
        img_5.style.transform = "translateX(" + x_position + "%)";
        slider_main_animation.style.animation = "paused";
        slider_poin_1.style.animation = "paused";
        slider_poin_2.style.animation = "paused";
        slider_poin_3.style.animation = "paused";
        slider_poin_4.style.animation = "paused";
        slider_poin_5.style.animation = "paused";
    })
    slider_poin_5.addEventListener("click",function(){
        x_position = -400;

        slider_poin_1.style.opacity = "0.4";
        slider_poin_2.style.opacity = "0.4";
        slider_poin_3.style.opacity = "0.4";
        slider_poin_4.style.opacity = "0.4";
        slider_poin_5.style.opacity = "1";  

        img_1.style.transform = "translateX(" + x_position + "%)";
        img_2.style.transform = "translateX(" + x_position + "%)";
        img_3.style.transform = "translateX(" + x_position + "%)";
        img_4.style.transform = "translateX(" + x_position + "%)";
        img_5.style.transform = "translateX(" + x_position + "%)";
        slider_main_animation.style.animation = "paused";
        slider_poin_1.style.animation = "paused";
        slider_poin_2.style.animation = "paused";
        slider_poin_3.style.animation = "paused";
        slider_poin_4.style.animation = "paused";
        slider_poin_5.style.animation = "paused";
    })

}
point_slider();
//main//