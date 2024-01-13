"use strict"
let head=document.getElementById("hd")
let formEl=document.forms.Feedback_form
let input1=document.forms.Feedback_form.elements.username
let radioButton=document.forms.Feedback_form.elements.Feedback
let email=document.forms.Feedback_form.elements.mail
let info=document.forms.Feedback_form.elements.information
let term=document.forms.Feedback_form.elements.terms
var checked = document.querySelector('input[name = "Feedback"]:checked');
console.log(term)
let alt=document.getElementById("alert")
let icon=document.getElementById("icon")
let s=document.getElementsByTagName("svg")
// console.log(terms)

formEl.addEventListener("submit",(e)=>{
   e.preventDefault();
if(input1.value==" " ||radioButton.value==" " || email.value==" " || info.value=="" ||  term.checked==false ){
    setTimeout(() => {
        alt.style.display="block"
    head.innerHTML=`Invalid form`
    }, 2000);
}
 else   if(input1.value==""){
        console.log("hello")
        setTimeout(() => {
            alt.style.display="block"
            head.innerHTML=`Invalid username`
        }, 2000);
            
    }
   
    else if (radioButton.value=="") {
        setTimeout(() => {
            alt.style.display="block"
            head.innerHTML=`feedback categories Invalid`
        }, 2000);
    
    }
    else if(email.value==""){
        setTimeout(() => {
            alt.style.display="block"
            head.innerHTML=`email Invalid`
        }, 2000);
       
    }
    else if(info.value==""){
        setTimeout(() => {
            alt.style.display="block"
            head.innerHTML=` Feedback Invalid`
        }, 2000);
       
    }
    else if(term.checked==false){
        setTimeout(() => {
            alt.style.display="block"
        head.innerHTML=`terms and condition Invalid`
        }, 2000);
        
    }   
    else{
        alt.style.display="block"
        alt.style.backgroundColor="green"
        icon.style.display="none"
        head.innerHTML=`Successfully submit`
    }

})
