$(document).ready(()=>{
     $("#textbtn").click(()=>{
       //console.log($("#fileSelector").val());
       getData($("#fileSelector").val());
     });

     function getData(fileName) {
       $.ajax({
         url: `js/${fileName}`,
         success: (result) => {
           $(".loaded-text").html(result);
         }
       });
     }
   });
