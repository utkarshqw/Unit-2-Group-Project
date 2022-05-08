//var aRR=JSON.parse( localStorage.getItem("student"))
 var form1= document.querySelector("form")
   form1.addEventListener("submit",myfun)
var Arr=[]
   function myfun(){
       event.preventDefault()
      var data={
           Name:form.name.value,
           Email:form.email.value,
           Pass:form.pass.value
 
       
   }
   Arr.push(data)
  var names=data.Name
 console.log(Arr)
 localStorage.setItem("student",JSON.stringify(data))
 localStorage.setItem("Sname",names)
 alert("Signup Successfull")
window.location.href = "login.html"

}