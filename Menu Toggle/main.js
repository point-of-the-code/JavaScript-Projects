const menuIcon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const entry = document.querySelector('.entry')

menuIcon.addEventListener('click',()=>{
	entry.classList.remove("entry")
	menuIcon.classList.add("active")
	menu.classList.add("active")
})

menu.addEventListener('click',()=>{
	menuIcon.classList.remove("active")
	menu.classList.remove("active")
})