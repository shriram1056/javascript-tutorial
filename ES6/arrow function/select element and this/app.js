// Arrow Functions or Fat Arrow Functions
// reg function: 'this' refers parent,left of the dot.if no dot then window
//arrow function: refers to it's current surrounding scope

const btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
  console.log(this);

  setTimeout(() => { //replace arrow with regular to see effect
    this.style.color="blue";
  },2000);
})