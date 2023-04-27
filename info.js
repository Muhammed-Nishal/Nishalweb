function sendMail() {
  var item = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_f9d83za";
  const templateID = "template_k27bgrw";

   emailjs.send(serviceID, templateID, item)
    .then(
      res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    }
    
    )
    .catch(err => console.log(err));

}
