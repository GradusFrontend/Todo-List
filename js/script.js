
const form = document.forms.todoForm
const input = document.querySelector('#inp')

let arr = []

form.onsubmit = (event) => {
    event.preventDefault()
    submit()
}

function submit() {
    let fullDate = new Date()
    let hours = fullDate.getHours()
    let minutes = fullDate.getMinutes()

    let todoData = {
        id: Math.floor(Math.random() * 100),
        time: hours + ':' + minutes,
        isFinished: false
    }
    let formData = new FormData(form).forEach(value => todoData.title = value)
    
    arr.push(todoData)
}
