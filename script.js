"use scrict";
const felixSelectorbtn = document.getElementById('felix-selector');
const tobiSelectorbtn =document.getElementById('tobi-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessage = document.querySelector('.chat-message');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearbtn = document.querySelector('.clear-chat-button');
const brightness = document.getElementById("brightness");


const body = document.body;
brightness.addEventListener("input", function(){
    const bright = brightness.value 
    body.style.backgroundColor = `hsl(0, 0%, ${100-bright}%)`
    

}
 )


const chatMessageElement = (message) =>`
<div class="message ${message.sender === 'Felix' ? 'blue-bg' : 'gray-bg' } ">
<div class="message-sender">${messageSender}</div>
<div class="message-text">${message.text} </div>
<div class="message-time">${message.time}</div>
</div>
`
// const ChatMessageElement = (message) => `  
//     <div class="message ${message.sender === 'Felix k' ? 'blue-bg' : 'gray-bg'}">
//         <div class="message-sender">${message.sender}</div>
//         <div class="message-text ">${message.text}</div>
//         <div class="message-time ">${message.time}</div>
//     </div>
// ` 

let messageSender = 'Felix k'
const updateMessageSender = (name) => {
    messageSender = name
    chatHeader.innerText = `${messageSender} chatting....`
    chatInput.placeholder = `Type here, ${messageSender}...`

    if (name === "Felix k"){
        felixSelectorbtn.classList.add('active-person')
       tobiSelectorbtn.classList.remove('active-person')
    }
     if (name === "Tobi"){
        tobiSelectorbtn.classList.add('active-person')
        felixSelectorbtn.classList.remove('active-person')
    }
    chatInput.focus()
}
felixSelectorbtn.onclick =() => updateMessageSender('Felix k')
tobiSelectorbtn.onclick =() => updateMessageSender('Tobi')

const sendMessage = (e) => {
 e.preventDefault()
    const time = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
const message= {
    sender:messageSender,
    text:chatInput.Value,
    time,
}
    chatMessage.innerHTML += chatInput.value
    chatInputForm.reset()
    chatMessage.scrollTop =  chatMessage.scrollHeight

}

chatInputForm.addEventListener('submit', sendMessage)

// let messageSender = "Felix k"
// const updateMessageSender = (name) =>{
//     messageSender = name
//     chatHeader.innerText =`${messageSender} chatting....`
//     chatInput.placeholder= `Type here, ${messageSender}....`

//     if (name === "Felix k"){
//         felixSelector.classList.add("active-person")
//         tobiSelector.classList.remove("active-person");
//     } else if (name === "Tobi"){
//         tobiSelector.classList.add("active-person")
//         felixSelector.classList.remove("active-person");
//     }
//     chatInput.focus()
// }

// felixSelector.onclick = () => updateMessageSender('Felix k')
// tobiSelector.onclick = () => updateMessageSender('Tobi')

// const sendMessage = (e) =>{
//     e.preventDefult()
//     // e.preventDefult()
//     const time = new Date().toLocaleString("en-uk",{hour:'numeric', minute:'numeric', hour12:true})
//     const message = {
//         sender: messageSender,
//         text: chatInput.value,
//         time,
//     }
//     chatMessages.innerHTML += createChatMessageElement(message)
// }
// chatInputForm.addEventListener('submit', sendMessage)
//     // chatInputForm.reset()
    // chatMessage.scrollTop = chatMessage.scrollHeight 
    // chatMessages.push(message)
    // localStorage.setItem(chatMessages, JSON.stringify(chatMessages))


