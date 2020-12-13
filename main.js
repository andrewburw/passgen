

function generate(){
  let result = [];
  let rangeChar = [[65,90],[48,57],[97,122]];
  let special = [[95,96],[36,38],[63,64]];



  for (let i = 0; i < 10; i++){
     let rangeRandom = Math.floor(Math.random()*3);
     result.push(String.fromCharCode(Math.floor(Math.random() * (rangeChar[rangeRandom][1] - rangeChar[rangeRandom][0]))
                         + rangeChar[rangeRandom][0]));
  }

     let charRand = () =>{
         let rangeRandom = Math.floor(Math.random()*3);
       return String.fromCharCode(Math.floor(Math.random() * (special[rangeRandom][1] - special[rangeRandom][0]))
                         +special[rangeRandom][0]);
     };

  result.splice(Math.floor(Math.random()* result.length), 0, charRand());
  result.splice(Math.floor(Math.random()* result.length), 0, charRand());

  document.getElementById("pass").textContent = result.join("");

}


function copyValue(){
  let copyText = document.getElementById("pass");
   let textArea = document.createElement("textarea");
   textArea.value = copyText.textContent;
   document.body.appendChild(textArea);
   textArea.select();
   document.execCommand("Copy");
   textArea.remove();
   alert('Copied!')
}
