const btns = document.querySelectorAll(".want-learn_btn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close_popup");
const select = document.querySelector("form select");
const orderBtn = document.querySelector(".order_btn");

closeBtn.addEventListener("click", ()=>{
    popup.style.display = "none";
})

orderBtn.addEventListener("click", ()=>{
    popup.style.display = "flex";
    let opt = document.createElement('option');
    opt.value = "gift_sertificate";
    opt.innerHTML = "Подарунковий сертифікат";
    select.appendChild(opt);

    select.value = "gift_sertificate";
})

btns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        popup.style.display = "flex";
        console.log(btn.parentElement.id);
        console.log(document.querySelector("form select").value);
        if(btn.parentElement.id === "basic_course"){
            select.value = "basic_course";
        }
        switch (btn.parentElement.id){
            case "basic_course":
                select.value = "basic_course";
                break;
            case "test_course":
                select.value = "test_lesson"
                break;
            case "remember_course":
                select.value = "remember_all_course"
                break;
            case "individual_course":
                select.value = "individual_course"
                break;
            case "children_course":
                select.value = "children_course"
                break;
            case "motosport_course":
                select.value = "motosport"
                break;
            case "pitbike_course":
                select.value = "pitbike"
                break;
            case "jimhana_course":
                select.value = "jimhana"
                break;

        }
    });
})