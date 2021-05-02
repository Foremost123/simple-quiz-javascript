function submitAnswer(){

  var total=3; //total marks possible
  var score=0; //total score

//getting input from user
var q1=document.forms['quizForm']['q1'].value;
var q2=document.forms['quizForm']['q2'].value;
var q3=document.forms['quizForm']['q3'].value;

//validation to check if every answer is marked

//if(q1=='' || q1==null){
//  alert('Pls attempt question 1')
//}
var arr1=["q1","q2","q3"]
for( var i=0;i<total;i++)
{
  if(eval(arr1[i])=='' || eval(arr1[i])==null){
    alert('Pls attempt question '+ arr1[i])

  }
}
//correct answers
var answers=["a","b","c"];

//check Answers
for(i=1;i<=total;i++){
  if(eval('q'+i)==answers[i-1]){
    score++
  }
  //display scores
var result=document.getElementById('results');
result.innerHTML='<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
alert('You scored '+score+'out of '+total);
return false;
}
}
