$(document).ready(()=>{
     $("#textbtn").click(()=>{
       //console.log($("#fileSelector").val());
       getData($("#fileSelector").val());
     });

     function getData(fileName) {
       $.ajax({
         url: `txt/${fileName}`,
         success: (result) => {
           $("#textArea").html(result);
         }
       });
     }
   });
