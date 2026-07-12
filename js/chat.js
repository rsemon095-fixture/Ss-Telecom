import { rtdb } from "../firebase.js";

import {
ref,
push,
onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const chatRef = ref(rtdb,"chat");

const userName=document.getElementById("userName");
const message=document.getElementById("message");
const sendBtn=document.getElementById("sendBtn");
const chatBox=document.getElementById("chatBox");

sendBtn.addEventListener("click",()=>{

const name=userName.value.trim();
const text=message.value.trim();

if(!name || !text){
alert("Name এবং Message লিখুন");
return;
}

push(chatRef,{
name,
text,
time:Date.now()
});

message.value="";

});

onValue(chatRef,(snapshot)=>{

chatBox.innerHTML="";

snapshot.forEach((item)=>{

const data=item.val();

chatBox.innerHTML+=`
<div class="message">
<strong>${data.name}</strong><br>
${data.text}
</div>
`;

});

chatBox.scrollTop=chatBox.scrollHeight;

});
