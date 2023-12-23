
var inp1 = document.getElementById("in1");
 function Validation1() {
  var inpval1 = inp1.value;
   if (inpval1 === "") {

     alert("Required")
     inp1.value = "";
   } else if (isNaN(inpval1)) {
     alert("Not Valid")
   }else {
       inp1.value = "";
       alert("Done")
   }
 }
 function test(e) {
    e.preventDefault();
  }
 



  /**/ 
  var regex2 = /^[a-zA-Z ]{2,30}$/;
  var inp2 = document.getElementById("name");
  //
  var regex3 = /^01[0-2,5]{1}[0-9]{8}$/;
  var inp3 = document.getElementById("phone");
  //
  var regex4 = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  var inp4 = document.getElementById("email");
  //
  var inp5 = document.getElementById("message");
 function Validation2() {
  var inpval2 = inp2.value;
  console.log(inpval2);
  var span2 = document.getElementById("span2");
   if (inpval2 === "") {
    //span2.style.display = "none";
     span2.textContent = "*";
     span2.style.display = "inline";
     inp2.value = "";
     inp2.style.color="black";
   } else if (!regex2.test(inpval2)) {
     //span2.style.display = "none";
    
     span2.textContent = "";
    inp2.style.color="red";
     //span2.style.display = "inline";
   } else {
      /* var mydiv = document.getElementById("mydiv2");
       mydiv.style.display = "none";
       var div = document.createElement("div");
       div.textContent = inpval2;
       document.body.append(div);*/
       inp2.style.color="black";
       span2.textContent = "";
       span2.style.display = "inline";
      // inp2.value = "";
    var a=1;
   }
   /////
   var inpval3 = inp3.value;
 console.log(inpval3);
 var span3 = document.getElementById("span3");
  if (inpval3 === "") {
   //span3.style.display = "none";
    
    span3.textContent = "*";
     span3.style.display = "inline";
     inp3.value = "";
     inp3.style.color="black";
  } else if (!regex3.test(inpval3)) {
    //span3.style.display = "none";

    span3.textContent = "";
    inp3.style.color="red";
    //span3.style.display = "inline";
  } else {
     /* var mydiv = document.getElementById("mydiv2");
      mydiv.style.display = "none";
      var div = document.createElement("div");
      div.textContent = inpval3;
      document.body.append(div);*/
      
      inp3.style.color="black";
       span3.textContent = "";
       span3.style.display = "inline";
      //inp3.value = "";
      var b=1;
  }
//////////////////
var inpval4 = inp4.value;
console.log(inpval4);
var span4 = document.getElementById("span4");
 if (inpval4 === "") {
  //span4.style.display = "none";
   
   span4.textContent = "*";
     span4.style.display = "inline";
     inp4.value = "";
     inp4.style.color="black";
 } else if (!regex4.test(inpval4)) {
   //span4.style.display = "none";
   span4.textContent = "";
    inp4.style.color="red";
   //span4.style.display = "inline";
 } else {
    /* var mydiv = document.getElementById("mydiv2");
     mydiv.style.display = "none";
     var div = document.createElement("div");
     div.textContent = inpval4;
     document.body.append(div);*/
     inp4.style.color="black";
       span4.textContent = "";
       span4.style.display = "inline";
     //inp4.value = "";
     var c=1;
 }
////////////////////////
var inpval5 = inp5.value;
console.log(inpval5);
var span5 = document.getElementById("span5");
 if (inpval5 === "") {
  //span5.style.display = "none";
  span5.textContent = "*";
  /*
  span5.style.display = "inline";
  */
  inp5.value = "";
  inp5.style.color="black";
 }else {
    /* var mydiv = document.getElementById("mydiv2");
     mydiv.style.display = "none";
     var div = document.createElement("div");
     div.textContent = inpval5;
     document.body.append(div);*/
     inp5.style.color="black";
       span5.textContent = "";
       span5.style.display = "inline";
     //inp5.value = "";
     var d=1;
 }



  if(a==1 && b==1 && c==1 && d==1){
    inp3.value = "";
    inp2.value = "";
    inp4.value = "";
    inp5.value = "";
  }
 }


 



 function test2(e) {
    e.preventDefault();
  }
  /**/

var regexfName = /^[a-zA-Z ]{2,30}$/;
var fn = document.getElementById("fname");
var regexlName = /^[a-zA-Z ]{2,30}$/;
var ln = document.getElementById("lname");
var regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
var em = document.getElementById("em");
var regxphone = /^01[0-2,5]{1}[0-9]{8}$/;
var ph = document.getElementById("ph");
var regxpass = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9])[A-Za-z0-9\W_]{8,}$/;
var pass = document.getElementById("pass");
var regxcountry = /^[a-zA-Z ]{2,30}$/;
var country = document.getElementById("coun");


function Validation3() {
  var fnval = fn.value;
  console.log(fnval);
  var span6 = document.getElementById("span6");
   if (fnval === "") {
    
     span6.textContent = "*";
     span6.style.display = "inline";
     fn.value = "";
     fn.style.color="black";
   } else if (!regexfName.test(fnval)) {
     /*
     span6.textContent = "Not Valid";
    */
     span6.textContent = "";
   fn.style.color="red";
   } else {
      
       span6.textContent = "";
       span6.style.display = "inline";
       fn.style.color="black";
       var e = 1;
   }
   ///////////////////////
    var lnval = ln.value;
    console.log(lnval);
    var span9 = document.getElementById("span9");
     if (lnval === "") {
      
       span9.textContent = "*";
       span9.style.display = "inline";
       ln.value = "";
       ln.style.color="black";
     } else if (!regexlName.test(lnval)) {
       /*
       span9.textContent = "Not Valid";
       */
       span9.textContent = ""
      ln.style.color="red";
     } else {
      ln.style.color="black";
         span9.textContent = "";
         span9.style.display = "inline"; 
      var f=1;
     }
     ///////////////////////
      var emval = em.value;
      console.log(emval);
      var span8 = document.getElementById("span8");
       if (emval === "") {
        
         span8.textContent = "*";
         span8.style.display = "inline";
         em.value = "";
         em.style.color="black";
       } else if (!regexemail.test(emval)) {
         /*
         span8.textContent = "Not Valid";
         */
         span8.textContent ="";
        em.style.color="red";
       } else {
        em.style.color="black";
           span8.textContent = "";
           span8.style.display = "inline"; 
        var g=1;
       }
       ///////////////////////
        var phval = ph.value;
        console.log(phval);
        var span7 = document.getElementById("span7");
         if (phval === "") {
          
           span7.textContent = "*";
           span7.style.display = "inline";
           ph.value = "";
           ph.style.color="black";
         } else if (!regxphone.test(phval)) {
           /*
           span7.textContent = "Not Valid";
           */
           span7.textContent = ""
          ph.style.color="red";
         } else {
          ph.style.color="black";
             span7.textContent = "";
             span7.style.display = "inline"; 
          var h=1;
         }
         ///////////////////////
          var passval = pass.value;
          console.log(passval);
          var span11 = document.getElementById("span11");
           if (passval === "") {
            
             span11.textContent = "*";
             span11.style.display = "inline";
             pass.value = "";
             pass.style.color="black";
           } else if (!regxpass.test(passval)) {
             /*
             span11.textContent = "Not Valid";
             */
             span11.textContent = "";
            pass.style.color="red";
           } else {
            pass.style.color="black";
               span11.textContent = "";
               span11.style.display = "inline"; 
            var i=1;
           }
           ///////////////////////
            var countryval = country.value;
            console.log(countryval);
            var span10 = document.getElementById("span10");
             if (countryval === "") {
              
               span10.textContent = "*";
               span10.style.display = "inline";
               country.value = "";
               country.style.color="black";
             } else if (!regxcountry.test(countryval)) {
               /*
               span10.textContent = "Not Valid";
               */
               span10.textContent = "";
              country.style.color="red";
             } else {
              country.style.color="black";
                 span10.textContent = "";
                 span10.style.display = "inline"; 
              var j=1;
             }
             ///////////////////////
             var radioButton1 = document.getElementById("rad");
             var radioButton2 = document.getElementById("radd");
             var span12 = document.getElementById("span12");
             
             if (!radioButton1.checked && !radioButton2.checked) {
                 span12.textContent = "*";
                 span12.style.display = "inline";
             } else {
                 span12.textContent = "";
                 span12.style.display = "none";
                 var k = 1;
             }
             
                 
                

/////////////////

            var dateInput = document.getElementById("date");
            var span13 = document.getElementById("span13");

            if (!dateInput.value) {
                span13.textContent = "*";
                span13.style.display = "inline";
            } else {
                span13.textContent = "";
                span13.style.display = "none";
                var l = 1;
    
            }






             if(e==1 &&f==1 && g==1 && h==1 && i==1 && j==1&& k==1 && l==1){
              fn.value = "";
              ln.value = "";
              em.value = "";
              ph.value = "";
              pass.value = "";
              country.value = "";
              radioButton1.checked = false;
              radioButton2.checked = false;
              dateInput.value = "";
              window.location.href= "../newPage/home1.html";
             
            }
  
  }

  function test3(e) {
    e.preventDefault();
  }

  /**/



  
var regexemaillog = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
var emlog = document.getElementById("emlog");
var regxpasslog = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9])[A-Za-z0-9\W_]{8,}$/;
var passlog = document.getElementById("passlog");

function Validation4() {
  var emlogval = emlog.value;
  console.log(emlogval);
  var span14 = document.getElementById("span14");
   if (emlogval === "") {
    
     span14.textContent = "*";
     span14.style.display = "inline";
     emlog.value = "";
     emlog.style.color="black";
   } else if (!regexemaillog.test(emlogval)) {
     /*
     span14.textContent = "Not Valid";
     */
     span14.textContent = "";
    emlog.style.color="red";
   } else {
    emlog.style.color="black";
       span14.textContent = "";
       span14.style.display = "inline";
      
       var m = 1;
   }
   ///////////////////////
    var passlogval = passlog.value;
    console.log(passlogval);
    var span15 = document.getElementById("span15");
     if (passlogval === "") {
      
       span15.textContent = "*";
       span15.style.display = "inline";
       passlog.value = "";
       passlog.style.color="black";
     } else if (!regxpasslog.test(passlogval)) {
       /*
       span15.textContent = "Not Valid";
       */
       span15.textContent = "";
      passlog.style.color="red";
     } else {
      passlog.style.color="black";
         span15.textContent = "";
         span15.style.display = "inline"; 
      var n=1;
     }
     ///////////////////////
     if(m==1 && n==1){
      emlog.value = "";
      passlog.value = "";
      window.location.href= "../newPage/home1.html";
    }
  
  }


  function test4(e) {
    e.preventDefault();
  }