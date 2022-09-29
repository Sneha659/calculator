let screen =document.getElementById('screen');
buttons=document.querySelectorAll('buttons');
let screenValue='';
for(item of button){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innertext;
        console.log('Button text is',buttontext)
        if(buttontext=='x'){
            buttontext='*';
            screenValue +=buttontext;
            screen.value =screenValue;
        }
        else if(buttontext=='C'){
            screenValue ='';
            screen.value =screenValue;
        }
        else if(buttontext=='='){
            screen.value =eval(screenValue);
        }
        else{
            screenValue +=buttontext;
            screen.value =screenValue;
        }
}