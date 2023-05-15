// text 가 보여지는 기능
function showText(number){
    if(number === 1){
     document.querySelector('#desc1').classList.remove('hideText');
     document.querySelector('#desc1').classList.add('showText');
    }else if(number === 2){
     document.querySelector('#desc2').classList.remove('hideText');
     document.querySelector('#desc2').classList.add('showText');
    }else if(number === 3){
        document.querySelector('#desc3').classList.remove('hideText');
        document.querySelector('#desc3').classList.add('showText');
       }
    else{
     document.querySelector('#desc4').classList.remove('hideText');
     document.querySelector('#desc4').classList.add('showText');
    }
 }
 
 // 텍스트가 감춰지는 기능
 function hideText(number) {
     if (number === 1) {
       document.querySelector("#desc1").classList.remove("showText");
       document.querySelector("#desc1").classList.add("hideText");
     } else if (number === 2) {
       document.querySelector("#desc2").classList.remove("showText");
       document.querySelector("#desc2").classList.add("hideText");
     }else if (number === 3) {
        document.querySelector("#desc3").classList.remove("showText");
        document.querySelector("#desc3").classList.add("hideText");
      }  
     else {
       document.querySelector("#desc4").classList.remove("showText");
       document.querySelector("#desc4").classList.add("hideText");
     }
   }
   
   // 클릭 기능
   function alertText(number) {
       alert(`${number}번째 추억이에요! 눌러주셔서 감사합니다 :)`);
   }