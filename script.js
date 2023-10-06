// "use scrict";
const felixSelector = document.getElementById('felix-selector');
const tobiSelector =document.getElementById('tobi-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-message');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearbtn = document.querySelector('.clear-chat-button');

// const chatMessages =[]

const createChatMessageElement = (message) => `  
    <div class="message ${message.sender === 'Felix k' ? 'blue-bg' : 'gray-bg'}">
        <div class="message-sender">${message.sender}</div>
        <div class="felix-text message-text ">${message.text}</div>
        <div class="felix-time message-time ">${message.time}</div>
    </div>
` 

let messageSender = "Felix k"
const updateMessageSender = (name) =>{
    messageSender = name
    chatHeader.innerText =`${messageSender} chatting....`
    chatInput.placeholder= `Type here, ${messageSender}....`

    if (name === "Felix k"){
        felixSelector.classList.add("active-person")
        tobiSelector.classList.remove("active-person");
    } else if (name === "Tobi"){
        tobiSelector.classList.add("active-person")
        felixSelector.classList.remove("active-person");
    }
    chatInput.focus()
}

felixSelector.onclick = () => updateMessageSender('Felix k')
tobiSelector.onclick = () => updateMessageSender('Tobi')

const sendMessage = (mail) =>{
    mail.preventDefult()
    // e.preventDefult()
    const time = new Date().toLocaleString("en-uk",{hour:'numeric', minute:'numeric', hour12:true})
    const message = {
        sender: messageSender,
        text: chatInput.value,
        time,
    }
    chatMessages.innerHTML += createChatMessageElement(message)
}
chatInputForm.addEventListener('submit', sendMessage)
    // chatInputForm.reset()
    // chatMessage.scrollTop = chatMessage.scrollHeight 
    // chatMessages.push(message)
    // localStorage.setItem(chatMessages, JSON.stringify(chatMessages))


