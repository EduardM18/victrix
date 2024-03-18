//getting html elements//
const container_wrapper = document.getElementById("content_cont_section");
const container = document.getElementById("content_cont");
const item = document.getElementsByClassName("item_cont");
const load_more = document.getElementById("load_more_p");
const all_section_p = document.getElementById("all_section");
const your_victrix_section_p = document.getElementById("your_victrix_section");
const victrix_on_the_road_section_p = document.getElementById("victrix_on_the_road_section");
const military_enforcement_section_p = document.getElementById("military_enforcement_section");
const form = document.getElementById("post_form");
const input_name = document.getElementById("name_input");
const input_surname = document.getElementById("surname_input");
const input_area = document.getElementById("area_input");
const input_tel = document.getElementById("tel_input");
const input_email = document.getElementById("email_input");
const input_title = document.getElementById("title_input");
const input_section = document.getElementById("section_selector");
const input_file = document.getElementById("file_input");
const privacy_checkbox = document.getElementById("privacy_check");
const rules_checkbox = document.getElementById("rules_check");
const author_checkbox = document.getElementById("author_check");


//getting all_victrix section posts from dataBase//
const all_posts = dataBase.all_victrix_posts;
//getting your_victrix section from dataBase//
const your_posts = dataBase.your_victrix;
//getting victrix_on_the_road section from dataBase//
const victrix_on_road_posts = dataBase.victrix_on_road;
//getting military_enforcement section from dataBase//
const military_enforcement_posts = dataBase.military_enforcement;
//current posts section//
let current_posts = all_posts;
//is_liked//
let is_liked = "false";
//counter of loading posts at one time//
let load_count = 9;
//function constructor//
function render_posts(comment = "comment",name = "user name",likes,image,id){
    //refreshing ids//
    for(let i = 1; i < dataBase.all_victrix_posts.length; i++){
        dataBase.all_victrix_posts[i].id = i+1;
    }
    for(let i = 1; i < dataBase.military_enforcement.length; i++){
        dataBase.military_enforcement[i].id = i+1;
    }
    for(let i = 1; i < dataBase.victrix_on_road.length; i++){
        dataBase.victrix_on_road[i].id = i+1;
    }
    for(let i = 1; i < dataBase.your_victrix; i++){
        dataBase.your_victrix[i].id = i+1;
    }
    //creating elements//
    if(id <= load_count){
        const div_cont = document.createElement("div");
        div_cont.classList.add("item_cont");
        div_cont.setAttribute("id",id);
        //
        const img = document.createElement("img");
        img.classList.add("item_image");
        img.src = image;
        //
        const div_reactions_row = document.createElement("div");
        div_reactions_row.classList.add("reactions_row");
        //
        const div_reactions_cont = document.createElement("div");
        div_reactions_cont.classList.add("reactions_cont");
        //
        const div_likes_cont = document.createElement("div");
        div_likes_cont.classList.add("likes_cont");
        //
        const likes_quantity = document.createElement("p");
        likes_quantity.classList.add("likes_quantity");
        likes_quantity.setAttribute("id",`likes_quantity${id}`);
        likes_quantity.textContent = likes.likes_count;
        //
        const like_icon = document.createElement("i");
        like_icon.setAttribute("id",`like_icon${id}`);
        like_icon.classList.add(...["fa-solid", "fa-thumbs-up"]);
        //
        const user_info_cont = document.createElement("div");
        user_info_cont.classList.add("user_info");
        //
        const user_comment = document.createElement("p");
        user_comment.classList.add("user_hashtag");
        user_comment.textContent = comment;
        //
        const user_name = document.createElement("p");
        user_name.classList.add("user_name");
        user_name.textContent = name;
        //
        const share_btn = document.createElement("div");
        share_btn.classList.add("share_btn");
        //
        const share_icon = document.createElement("i");
        share_icon.classList.add(...["fa-regular", "fa-share-from-square"]);
        //
        const share_p = document.createElement("p");
        share_p.textContent = "Share";
        //appending elements//
        div_cont.appendChild(img);
        div_cont.appendChild(div_reactions_row);
        div_reactions_row.appendChild(div_reactions_cont);
        div_reactions_cont.appendChild(div_likes_cont);
        div_likes_cont.appendChild(likes_quantity);
        div_likes_cont.appendChild(like_icon);
        div_reactions_row.appendChild(share_btn);
        share_btn.appendChild(share_icon);
        share_btn.appendChild(share_p);
        div_reactions_cont.appendChild(user_info_cont);
        user_info_cont.appendChild(user_comment);
        user_info_cont.appendChild(user_name);
        //dropping html construction to main html//
        container.appendChild(div_cont);
        //some effects and functions of html construction//
        const likes_count = likes.likes_count;
        let newlikes = likes_count;
        let liked_post = current_posts[id -1];
        if(liked_post.likes.is_liked == true){
            like_icon.style.color = "blue";
        }
        like_icon.addEventListener("click",function(){
            if(liked_post.likes.is_liked == false){
                liked_post = current_posts[id -1];
                likes_quantity.textContent = likes.likes_count += 1;
                like_icon.style.color = "blue";
                liked_post.likes.is_liked = true;
            }
        })
        img.addEventListener("click",function() {
            // console.log(liked_post);
            Modal(comment,name,newlikes,liked_post,image,id);
        })
        //marking main posts section//
        all_section_p.classList.add("current_section_posts");
    } 
}
    
//modal function//
function Modal(comment,name,likes,post,image,id,show = true){
    const like_icon_main = document.getElementById(`like_icon${id}`);
    const likes_count_main = document.getElementById(`likes_quantity${id}`);
    const main = document.querySelector("main");            
    function remuve_Modal(){
        const modal_container = document.querySelector(".modal_div");
        main.removeChild(modal_container);
    }
    if(show){
        let is_modal_liked = "false";
        //creating html elements//
        const close_icon = document.createElement("i");
        close_icon.setAttribute("id","close_icon");
        close_icon.classList.add(...["fa-regular", "fa-x"])
        //
        const modal_div = document.createElement("div");
        modal_div.classList.add("modal_div");
        //
        const div_cont = document.createElement("div");
        div_cont.classList.add("modal_div_cont");
        //
        const img = document.createElement("img");
        img.classList.add("modal_img");
        img.src = image;
        //
        const div_reactions_row = document.createElement("div");
        div_reactions_row.classList.add("modal_reactions_row");
        //
        const div_reactions_cont = document.createElement("div");
        div_reactions_cont.classList.add("modal_reactions_cont");
        //
        const div_likes_cont = document.createElement("div");
        div_likes_cont.classList.add("modal_likes_cont");
        //
        const likes_quantity = document.createElement("p");
        likes_quantity.classList.add("modal_likes_quantity");
        likes_quantity.textContent = likes;
        //
        const like_icon = document.createElement("i");
        like_icon.setAttribute("id",`modal_like_icon${id}`);
        like_icon.classList.add(...["fa-solid", "fa-thumbs-up"]);
        //
        const user_info_cont = document.createElement("div");
        user_info_cont.classList.add("modal_user_info");
        //
        const user_comment = document.createElement("p");
        user_comment.classList.add("modal_user_hashtag");
        user_comment.textContent = comment;
        //
        const user_name = document.createElement("p");
        user_name.classList.add("modal_user_name");
        user_name.textContent = name;
        //
        const share_btn = document.createElement("div");
        share_btn.classList.add("modal_share_btn");
        //
        const share_icon = document.createElement("i");
        share_icon.classList.add(...["fa-regular", "fa-share-from-square"]);
        //
        const share_p = document.createElement("p");
        share_p.textContent = "Share";
        //appending html elements//
        modal_div.appendChild(div_cont);
        modal_div.appendChild(close_icon);
        div_cont.appendChild(img);
        div_cont.appendChild(div_reactions_row);
        div_reactions_row.appendChild(div_reactions_cont);
        div_reactions_cont.appendChild(div_likes_cont);
        div_likes_cont.appendChild(likes_quantity);
        div_likes_cont.appendChild(like_icon);
        div_reactions_row.appendChild(share_btn);
        share_btn.appendChild(share_icon);
        share_btn.appendChild(share_p);
        div_reactions_cont.appendChild(user_info_cont);
        user_info_cont.appendChild(user_comment);
        user_info_cont.appendChild(user_name);
        //droping html construction in main html//
        main.appendChild(modal_div)
        //main scrol fixing//
        disableScroll()
        //like function//
        if(post.likes.is_liked == true){
            likes_quantity.textContent = post.likes.likes_count;
            like_icon.style.color = "blue";
        }
        else{
            like_icon.addEventListener("click",function(){
                if(post.likes.is_liked == false){
                    // console.log(post);
                    like_icon.style.color = "blue";
                    likes_quantity.textContent = post.likes.likes_count += 1;
                    likes_count_main.textContent = post.likes.likes_count;
                    like_icon_main.style.color = "blue";
                    post.likes.is_liked = true;
                }
            })
        }
        //close function//
        close_icon.addEventListener("click",function(){
            remuve_Modal();
            enableScroll()
        })
    }else{
        remuve_Modal()
        enableScroll()
    }
}

//load more function//
load_more.addEventListener("click",function(){
    load_count += 9;
    //rendering more posts//
    current_posts.forEach((post =>{
        if(post.id + 9 > load_count){
            render_posts(post.comment,post.user_name,post.likes,post.image,post.id);
        }else if(post.id >= current_posts.length){
            load_more.textContent = "No more posts";
        }
    }))
})
current_posts.forEach((post =>{
    render_posts(post.comment,post.user_name,post.likes,post.image,post.id);
}))

//add post function//
function add_post(name_input,surname_input,area_input,tel_input,email_input,title_input,section_input){
    const name = name_input.value;
    const surname = surname_input.value;
    const area = area_input.value;
    const tel = tel_input.value;
    const email = email_input.value;
    const title = title_input.value;
    let section = section_input.value;
    if(section == "all_victrix_posts"){
        section = dataBase.all_victrix_posts;
    }else if(section == "victrix_on_road"){
        section = dataBase.victrix_on_road;
    }else if(section == "your_victrix"){
        section = dataBase.your_victrix;
    }else if(section == "military_enforcement"){
        section = dataBase.military_enforcement;
    }else{
        console.log("vrong value of section input option");
    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    async function add_post_to_data() {
       const file = document.querySelector('#file_input').files[0];
       const base_64file = await toBase64(file);
       const post = {
            id:1,
            comment:title,
            user_name:`${name} ${surname}`,
            image:base_64file,
            area:area,
            tel:tel,
            email:email,
            likes:{
                likes_count: 0,
                is_liked:false
            }
        }
        if(section != dataBase.all_victrix_posts && section != dataBase.your_victrix){
            dataBase.all_victrix_posts.unshift(post);
            dataBase.your_victrix.unshift(post);
            section.unshift(post);
        }
        if(section == dataBase.your_victrix){
            dataBase.all_victrix_posts.unshift(post);
            section.unshift(post);
        }
        if(section == dataBase.all_victrix_posts){
            dataBase.your_victrix.unshift(post);
            section.unshift(post);
        }
        // console.log(dataBase.all_victrix_posts);
        // console.log(dataBase.military_enforcement);
        // console.log(dataBase.victrix_on_road);
        // console.log(dataBase.your_victrix);
        dataBase.all_victrix_posts.forEach((post =>{
            render_posts(post.comment,post.user_name,post.likes,post.image,post.id);
        }))
    }
    add_post_to_data();
    // cleaning inputs//
    input_name.value = "";
    input_surname.value = "";
    input_area.value = "";
    input_tel.value = "";
    input_email.value = "";
    input_title.value = "";
    input_file.value = "";
    privacy_checkbox.checked = false;
    rules_checkbox.checked = false;
    author_checkbox.checked = false;
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    add_post(input_name,input_surname,
    input_area,input_tel,input_email,
    input_title,input_section); 
    clean_posts();
})

//scroll monipulation functions//
function disableScroll() {
    document.body.classList.
    add("stop-scrolling");
}
function enableScroll() {
    document.body.classList
    .remove("stop-scrolling");
}

//sections switch function//
function switch_section(posts){
    //reseting load_count//
    load_count = 9;
    //rendering new posts//
    current_posts = posts;
    current_posts.forEach((post =>{
        render_posts(post.comment,post.user_name,post.likes,post.image,post.id);
    }))
}

//function clean_posts is remuving all posts from container//
function clean_posts() {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    load_more.textContent = "Load more";
}

//activating sections switch//
victrix_on_the_road_section_p.addEventListener("click",function(){
    clean_posts();
    switch_section(victrix_on_road_posts);
    victrix_on_the_road_section_p.classList.add("current_section_posts");
    your_victrix_section_p.classList.remove("current_section_posts");
    military_enforcement_section_p.classList.remove("current_section_posts");
    all_section_p.classList.remove("current_section_posts");
})
your_victrix_section_p.addEventListener("click",function(){
    clean_posts();
    switch_section(your_posts);
    your_victrix_section_p.classList.add("current_section_posts");
    military_enforcement_section_p.classList.remove("current_section_posts");
    all_section_p.classList.remove("current_section_posts");
    victrix_on_the_road_section_p.classList.remove("current_section_posts");
    if(your_posts.length < 1){
        load_more.textContent = "No posts founded";
    }
})
military_enforcement_section_p.addEventListener("click",function(){
    clean_posts();
    switch_section(military_enforcement_posts);
    victrix_on_the_road_section_p.classList.remove("current_section_posts");
    your_victrix_section_p.classList.remove("current_section_posts");
    military_enforcement_section_p.classList.add("current_section_posts");
    all_section_p.classList.remove("current_section_posts");
})
all_section_p.addEventListener("click",function(){
    clean_posts();
    switch_section(all_posts);
    victrix_on_the_road_section_p.classList.remove("current_section_posts");
    your_victrix_section_p.classList.remove("current_section_posts");
    military_enforcement_section_p.classList.remove("current_section_posts");
    all_section_p.classList.add("current_section_posts");
})
