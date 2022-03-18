const skis = document.querySelectorAll(".prof-skills");
function reveal() {

   const sk = document.getElementsByClassName("prof-container")
   for(var i=0;i<sk.length;i++)
   {
       sk[i].classList.add("filer")
   }
    

 }
 function revealout() {
   const sk = document.getElementsByClassName("prof-container")
   for(var i=0;i<sk.length;i++)
   {
       sk[i].classList.remove("filer")
   }
 }
 skis[0].addEventListener("mouseover",reveal)
 skis[0].addEventListener("mouseout",revealout)






