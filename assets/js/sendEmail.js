function validate() {
    let fname =  document.querySelector(".first_name") 
    let lname =  document.querySelector(".last_name") 
    let email =  document.querySelector(".email") 
    let message = document.querySelector(".textarea") 
    let submit = document.querySelector(".submit");

    submit.addEventListener("click", (e)=> {
        e.preventDefault()

        if(fname.value == "" || lname == "" || email.value ==  "" || message.value == ""){
            inputEmpty();
         }
        else {
            setTimeout(() => {
                loader.style.display="flex";
            }, 2000)
        sendmail(fname.value, lname.value, email.value, message.value)
            success();
                loader.style.display="none";

        }
    });
}
validate
function sendmail () {
    emailjs.send("service_g3a7qft","template_hqotm5r",{
        name: "name",
        to_fname: "first name",
        to_lname: "last name",
        email: "email",
        message: "comments",
        reply_to: "reply to",
    });
}
function success () {
    swal({
     title: "Success!",
     text: "Success your message has been sent!",
     icon: "",Success,
     button: "oK!",
    });
   } 
function error () {
    swal({
     title: "Oops --.!",
     text: "Something went wrong and your message could not be sent!",
     icon: "",Error,
     button: "oK!",
    });
   } 
   function error() {
    swal({
     title: "Oops --.!",
     text: "Input fields are required",
     icon: "",Error,
     button: "oK!",
    });
   } 

   inputEmpty()