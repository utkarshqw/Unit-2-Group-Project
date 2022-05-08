 var form = document.querySelector("form");

        //for taking data from local strorage;
     var student = JSON.parse(localStorage.getItem("student"));

        form.addEventListener("submit", function (event) {
            event.preventDefault()
            var data = {
                Name:form.name.value,
                Email: form.email.value,
                Pass: form.pass.value,
            }
           console.log(data)
        // condition check for data is present
         if (student === null) {
             alert("Please Create an Account");
         }
         else if (student.Email === data.Email && student.Pass === data.Pass) {
             alert("Sign in Successful")
             localStorage.setItem("signin", JSON.stringify(student))
             window.location.href = "index2.html"
         }
         else {
             alert("User Does Not Exist")
         }
         })
