
const form = document.forms.todoForm
const input = document.querySelector('#inp')

let arr = []
let wrap = document.querySelector('.wrap')

form.onsubmit = (event) => {
    event.preventDefault()
    if (input.value.length > 0) submit()
}

function submit() {
    let fullDate = new Date()
    let hours = fullDate.getHours()
    let minutes = fullDate.getMinutes()

    let todoData = {
        id: Math.floor(Math.random() * 100),
        time: hours + ':' + minutes,
        completed: false
    }
    let formData = new FormData(form).forEach(value => todoData.title = value)

    let isDuplicate = arr.some(item => item.title === todoData.title);

    if (!isDuplicate) {
        arr.push(todoData);
    }

    reloadTodo(arr, wrap)
}

function reloadTodo(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let todo = document.createElement('div')
        let todoText = document.createElement('h3')
        let timeText = document.createElement('p')
        let deleteBtn = document.createElement('img')

        todo.classList.add('todo')
        todoText.classList.add('todo-text')
        timeText.classList.add('time')
        deleteBtn.classList.add('delete')

        place.append(todo)
        todo.append(todoText, timeText, deleteBtn)
        todoText.innerHTML = item.title
        timeText.innerHTML = item.time
        deleteBtn.src = './cross.svg'

        deleteBtn.onclick = () => {
            todo.remove()
            arr.splice(arr.indexOf(item), 1)
        }

        todo.ondblclick = () => {
            let changeTitle = prompt('ghbs')
            item.title = changeTitle
            todoText.innerHTML = item.title
        }
        todoText.onclick = () => {
            todoText.style.textDecorationLine = 'line-through'
            todoText.style.textDecorationColor = 'blue'
            todoText.style.textDecorationThickness = '2px'
            item.completed = true
        }
    }
}
