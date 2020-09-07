const numbersButtons=document.querySelectorAll('.numbers');
const operatorsButtons=document.querySelectorAll('.operators');
const previousNumbers=document.getElementById('previous');
const currentNumbers=document.getElementById('current');
const deleteButton=document.getElementById('delete');
const allClear=document.getElementById('all-clear');
const equal=document.getElementById('equal');

///current number inner function
function currentNumberInner(){
    for(var i=0; i<numbersButtons.length; i++){
        numbersButtons[i].addEventListener('click',(event)=>{
            var number=event.target.innerHTML;
            var currentNum=currentNumbers.innerHTML;
            if(number==='.'&&currentNum.includes('.'))return
            // currentNumbers.innerHTML+=event.target.innerHTML;
            if(currentNumbers.innerHTML.length===19){
                currentNumbers.innerHTML=currentNumbers.innerHTML;
            }else{
                currentNumbers.innerHTML+=event.target.innerHTML;
            }
        })
    }
}
///output clear function
function allClearNumber(){
    allClear.addEventListener('click',()=>{
        currentNumbers.innerHTML='';
        previousNumbers.innerHTML='';
    })
}
///backspase function
function backspase(){
    deleteButton.addEventListener('click',()=>{
        var delet=currentNumbers.innerHTML;
        delet=delet.slice(0,delet.length-1)
        currentNumbers.innerHTML=delet;
    })
}
///operators inner function
function operatorsInner(){
    for(var i=0; i<operatorsButtons.length; i++){
        operatorsButtons[i].addEventListener('click',(event)=>{
             var operators=event.target.innerHTML;
             var currentValue=currentNumbers.innerHTML;
            if(operators==='+'){
                previousNumbers.innerHTML=currentValue+operators;
                currentNumbers.innerHTML=''
            }if(operators==='-'){
                previousNumbers.innerHTML=currentValue+operators;
                currentNumbers.innerHTML=''
            }if(operators==='x'){
                previousNumbers.innerHTML=currentValue+operators;
                currentNumbers.innerHTML=''
            }if(operators==='/'){
                previousNumbers.innerHTML=currentValue+operators;
                currentNumbers.innerHTML=''
            }
        })
    }
    
}
////equal function
function equual(){
    equal.addEventListener('click',(event)=>{
        var previousNumberValue=previousNumbers.innerHTML;
        var subValue=previousNumberValue.slice(-1,previousNumberValue.length);
        var prev=previousNumbers.innerHTML;
            prev=prev.slice(0,prev.length-1);
            prev=parseFloat(prev);
        var curr=parseFloat(currentNumbers.innerHTML);
        if(subValue==='+'){
            var result=prev+curr;
            currentNumbers.innerHTML=result;
            previousNumbers.innerHTML='';
        }if(subValue==='-'){
            var result=prev-curr;
            currentNumbers.innerHTML=result;
            previousNumbers.innerHTML='';
        }if(subValue==='x'){
            var result=prev*curr;
            currentNumbers.innerHTML=result;
            previousNumbers.innerHTML='';
        }if(subValue==='/'){
            var result=prev/curr;
            currentNumbers.innerHTML=result;
            previousNumbers.innerHTML='';       
        }if(subValue===''){
            alert('Enter any number and try again !')
        }
    })
}
function info(){
    console.log('md sohidul islam');
    console.log('Rajshahi,Bangladesh');
    console.log('Mail =>> mddsohidulislam@gmail.com');
}
currentNumberInner();
allClearNumber();
backspase();
operatorsInner();
equual();
info()