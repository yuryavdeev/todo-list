import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'
import { TodosContext } from '../../contexts/TodosContext'

const TodoList = React.memo(({ handleChangeTodosList, isSubmitting }) => {

    const initialTodosList = React.useContext(TodosContext)
    const [click, setClick] = React.useState(false)
    const [tasksToRender, setTasksToRender] = React.useState([])


    // отрисовка, в т.ч. при изме списка 
    React.useEffect(() => {
        setTasksToRender(initialTodosList.map(item =>
            <TodoItem
                key={item.id}
                task={item}
                handleTaskChange={handleTaskChange}
                handleRemoveTask={handleRemoveTask}
            />
        ))
    }, [initialTodosList, click])


    // обновление task'а при изме чекбокса и редактировании
    const handleTaskChange = (updatedTask) => {
        // ...patch-запрос на сервер с новыми данными
        let temporaryList = initialTodosList
        temporaryList.splice
            (temporaryList.findIndex(t => t.id === updatedTask.id), 1, updatedTask)
        handleChangeTodosList(temporaryList) // в Арр - для изменения списка задач
        setClick(!click) // триггер для рендера
    }


    // удаление task'а
    const handleRemoveTask = (task) => {
        handleChangeTodosList(initialTodosList.filter(t => t.id !== task.id)) // в Арр - для изменения списка задач
    }


    return (
        <div className="todo-list">
            {
                tasksToRender.length ?
                    <ul>{tasksToRender}</ul>
                    :
                    !isSubmitting &&
                    <p>You have no tasks added!</p>
            }
        </div>
    )
})

export default TodoList
