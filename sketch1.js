const canvas = document.getElementById('c2')
const c = canvas.getContext('2d')

function draw() {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight-100
    c.strokeStyle = 'white'
    c.strokeRect(0,0,canvas.width,canvas.height)
    c.strokeRect(0,0,canvas.width,canvas.height-100)
}

let callfunction = setInterval(draw, 100)