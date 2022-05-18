const lessonImg = document.querySelectorAll(".lesson_img");
const lessonDescription = document.querySelectorAll(".lesson_description");

lessonImg.forEach((lesson, index)=>{
    lesson.addEventListener("click", ()=>{
        if(lesson.classList.contains("lesson_active")){
            lesson.classList.remove("lesson_active");
            lessonDescription[index].style.maxHeight = "0";

        } else{
            lesson.classList.add("lesson_active");
            lessonDescription[index].style.maxHeight = "800px";
        }
    })

})

