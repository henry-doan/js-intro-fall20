document.getElementById('demo').innerHTML = 'Hello World'
// debugger
// document.getElementsByClassName
// document.getElementsByTagName("p")
document.getElementById('myImg').style.width = '500px'

// event - click hover keyboard 

var btn = document.getElementById('btn')

btn.addEventListener("click", changePic) 
var xbox = "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"

function changePic() {
  if (document.getElementById('myImg').src === xbox) {
    document.getElementById('myImg').src = 'https://images.unsplash.com/photo-1599739583987-a571686b0478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
  } else {
    document.getElementById('myImg').src = xbox
  }
}
