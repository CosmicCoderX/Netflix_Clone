const faqs= document.querySelectorAll(".faqbox")

faqs.forEach((faqbox)=>{
    faqbox.addEventListener("click",()=>{
        if(faqbox.classList.contains("active")){
            faqbox.classList.remove("active")
            
        }else{
            faqbox.classList.add("active")
        }
    })

})