// alert("hello");
function ready(){
    
    var max1=10;
    var score=0;
    const res =document.querySelector('.result');
const quiz1=document.forms['form1']['ques1'].value;
const quiz2=document.forms['form1']['ques2'].value;
const quiz3=document.forms['form1']['ques3'].value;
const quiz4=document.forms['form1']['ques4'].value;
const quiz5=document.forms['form1']['ques5'].value;
const quiz6=document.forms['form1']['ques6'].value;
const quiz7=document.forms['form1']['ques7'].value;
const quiz8=document.forms['form1']['ques8'].value;
const quiz9=document.forms['form1']['ques9'].value;
const quiz10=document.forms['form1']['ques10'].value;
const fr= document.querySelector('.final_result');
console.log(10);
for(a=1;a<=max1;a++){
    if(eval('quiz'+a)==null || eval('quiz'+a)==''){
        alert("youn missed the question"+a);
        return false;
    }
}
const correct=[2,1,1,1,3,3,4,1,3,2];
for(a=1;a<=max1;a++)
{
    if(eval('quiz'+a)==correct[a-1]){
        score=score+1;
    }
}

fr.innerHTML="your score is--"+score+"/10";
return false;
}