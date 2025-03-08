let string="";
let buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        value=button.innerHTML;
        if(value =='='){
            document.querySelector('input').value=eval(string);
        }
        else if(value=='C'){
            document.querySelector('input').value=""; 
        }
        else{
            string=string+value;
            document.querySelector('input').value=string;
        }
    });
});