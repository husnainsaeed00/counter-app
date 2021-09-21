//for initial value
let count = 0;
 //select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelector(".btn");

bnts.forEach(function(btns){
    btn.addEventListener("click", function(e){
      const styles = e.currentTarget.classList
      if(styles.contains("increase")){
        count--;
      }
      else if(styles.contains("decrease")){
        count++;
      }
      else{
        count = 0;
      }
      value.textContent = count;
    });

});