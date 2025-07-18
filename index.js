const button=document.getElementById("btn1");
const field=document.getElementById("field1");
const paragraph=document.getElementById("para1");
paragraph.textContent="Hello";

const handler=()=>{ 
  paragraph.textContent=`Text Enter You:- ${field.value}`;
}