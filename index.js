const btn1 = document.getElementById("btn1")
const body = document.body

btn1.style.padding = '100   px'
btn1.style.fontSize = '20px'

const defaultText = 'kesini bang'
btn1.textContent = defaultText

const munculText = document.createElement('p')
munculText.textContent = 'Salam kenal aku arapa 😶‍🌫️😶‍🌫️😶‍😎😙💕💕'


function newText(){
btn1.textContent = 'aduhh kesentuh'
munculText.style.color = 'aqua'
body.append(munculText)
}

function ubahWarna () {
btn1.textContent = defaultText
munculText.style.color = 'tomato'
body.append(munculText)
}


