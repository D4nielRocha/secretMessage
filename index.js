const { hash } = window.location;

const message = (atob(hash.replace('#','')));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('p').innerHTML = message;
}

// console.log(atob(hash.replace('#','')));

document.querySelector("form").addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const messageInput = document.querySelector('#message-input');
    const hashedMessage = btoa(messageInput.value);
    

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${hashedMessage}`;
    linkInput.select();
});