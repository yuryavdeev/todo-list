import React from 'react'
import './TodoItem.css'
import { DateTime } from 'luxon'
import pencil from '../../images/pencil.svg'
import Form from '../Form/Form'

const TodoItem = React.memo(({ index, task, handleTaskChange, handleRemoveTask }) => {

    const [timeOfCreation, setTimeOfCreation] = React.useState('')
    const [isEditFieldVisible, setIsEditFieldVisible] = React.useState(false)


    React.useEffect(() => {
        task.date ?
            setTimeOfCreation((DateTime.fromISO(task.date).setLocale('en').toFormat('dd LLL T')))
            :
            setTimeOfCreation((DateTime.fromISO(new Date().toISOString()).setLocale('en').toFormat('dd LLL T')))
    }, [task])


    const handleCheckboxChange = (e) => {
        let { completed, ...updatedTask } = task // удалил "старый" completed
        handleTaskChange({ ...updatedTask, completed: e.target.checked }) // task с новым значением completed - в обработчик
    }


    const handleButtonDeleteClick = () => {
        handleRemoveTask(task)
    }


    const handleIconEditClick = () => {
        setIsEditFieldVisible(!isEditFieldVisible)
    }


    const changeTask = (newTask) => {
        let { title, ...updatedTask } = task // удалил "старый" title
        handleTaskChange({ ...updatedTask, title: newTask }) // task с новым title - в обработчик
        setIsEditFieldVisible(false)
    }


    return (
        <li className="todo-item">
            <label>
                <input
                    className="todo-item__checkbox"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={task.completed}
                    disabled={isEditFieldVisible}
                />
                <span></span>
            </label>

            <p className={`todo-item__text ${task.completed && 'todo-item__text_crossed-out'} ${isEditFieldVisible && 'todo-item__text_color'}`}>
                {index + '. ' + task.title.toUpperCase()}
                <br />
                <span className="todo-item__time">
                    {timeOfCreation}
                </span>
            </p>

            <img className="todo-item__pencil" src={pencil} alt="edit task" onClick={handleIconEditClick} />
            <button className="waves-effect waves-light btn todo-item__btn" onClick={handleButtonDeleteClick}>x</button>

            {
                isEditFieldVisible &&
                <Form
                    addTask={changeTask}
                    taskTitle={task.title}
                />
            }
        </li >
    )
})

export default TodoItem
