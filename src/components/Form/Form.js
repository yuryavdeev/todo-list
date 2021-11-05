import React from 'react'
import './Form.css'
import { TodosContext } from '../../contexts/TodosContext'

const Form = React.memo(({ addTask, placeholder }) => {

    const initialTodosList = React.useContext(TodosContext)
    const [inputValue, setInputValue] = React.useState('')
    const [message, setMessage] = React.useState('')


    const handleInput = (e) => {
        const task = e.target.value.trim()
        if (task.length > 4) {
            setInputValue(task)
            setMessage('')
        } else {
            setMessage('it requires 5 symbols, but no more than 50')
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue) {
            // если t.title === inputValue - filter вернет массив из одинаковых task'ов
            if (!initialTodosList.filter(t => t.title === inputValue.toLowerCase()).length) {
                addTask(inputValue)
                setInputValue('')
                e.target[0].value = ''
                setMessage('')
            } else {
                setMessage('The same task has already been added!')
            }
        }
    }


    return (
        <div className="form">

            <form className="form__container" onSubmit={handleSubmit}>
                <label className="form__label" htmlFor="input_text"></label>
                <input
                    className="form__input"
                    id="input_text"
                    type="text"
                    placeholder={placeholder}
                    required
                    onChange={handleInput}
                    minLength="5"
                    maxLength="50"
                    pattern='^[0-9A-Za-zА-Яа-яЁё\s\-]{5,50}$'
                    title="The field can only contain latin, cyrillic, numbers, space or hyphen"
                />

                {
                    message &&
                    <span style={{ color: "red" }}>{message}</span>
                }

                <button className="form__btn btn waves-effect waves-light" type="submit">
                    ok
                </button>

            </form>

        </div>
    )
})

export default Form
