const questionBtn = document.querySelectorAll(".question_mark ");
const answer = document.querySelectorAll(".question_answer");

questionBtn.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        if(btn.classList.contains("question_mark_active")){
            btn.classList.remove("question_mark_active");
            answer[index].style.maxHeight = "0";
        } else{
            btn.classList.add("question_mark_active");
            answer[index].style.maxHeight = "300px";
        }
    })
})