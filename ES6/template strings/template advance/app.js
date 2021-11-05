// Template Strings/Literals
// `` backticks above tab key left of 1 key
// tagged template

const author = "Some Author";
const statement = "Some Statement";

const quote = text`Here is the ${statement} by ${author} and it could not be more true`;
console.log(quote);

function text(text, ...vars) {
  console.log(text);//colects String
  console.log(vars);//colect whatever in ${}
  let awesomeText = text.map((item, index) => {
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  }).join("");
  return awesomeText;
}

const result = document.getElementById("result");
result.innerHTML = quote;
