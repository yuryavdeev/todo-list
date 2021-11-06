import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = React.memo(({ todosList, handleChangeTodosList, isSubmitting }) => {

    const [click, setClick] = React.useState(false)
    const [tasksToRender, setTasksToRender] = React.useState([])
    const [selectedView, setSelectedView] = React.useState('all')

    // селект начального списка
    React.useEffect(() => {
        let list = []

        selectedView === "completed" ?
            list = todosList.filter(t => t.completed)
            :
            selectedView === "not-completed" ?
                list = todosList.filter(t => !t.completed)
                :
                list = todosList


        setTasksToRender(list.map((item, index) =>
            <TodoItem
                key={item.id}
                index={index + 1}
                task={item}
                handleTaskChange={handleTaskChange}
                handleRemoveTask={handleRemoveTask}
            />
        ))
    }, [selectedView, todosList, click])



    // обновление task'а при изме чекбокса и редактировании
    const handleTaskChange = (updatedTask) => {
        // ...patch-запрос на сервер с новыми данными
        let temporaryList = todosList
        temporaryList.splice
            (temporaryList.findIndex(t => t.id === updatedTask.id), 1, updatedTask)
        handleChangeTodosList(temporaryList) // в Арр - для изменения списка задач
        setClick(!click) // триггер для рендера
    }


    // удаление task'а
    const handleRemoveTask = (task) => {
        handleChangeTodosList(todosList.filter(t => t.id !== task.id)) // в Арр - для изменения списка задач
    }


    return (
        <div className="todo-list">

            <select
                className="todo-list__select"
                defaultValue="all"
                onChange={(e) => setSelectedView(e.target.value)}
                style={{ display: "block", width: "50%", height: "32px" }}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not completed</option>
            </select>

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
