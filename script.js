const name  = document.getElementById('name')
const password  = document.getElementById('password')
const form  = document.getElementById('form')

form.addeventlistener('submit',(e) =>{
  let messages = []
  if (name.value === ' ' || name.value == null){
    messages.push('name is required')
  }
  e.preventdefault()
})
