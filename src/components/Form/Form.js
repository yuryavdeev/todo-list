import React from 'react'
import './Form.css'
import { TodosContext } from '../../contexts/TodosContext'

const Form = React.memo(({ addTask, taskTitle }) => {

    const initialTodosList = React.useContext(TodosContext)
    const [inputValue, setInputValue] = React.useState('')
    const [showInput, setShowInput] = React.useState('')
    const [changedTask, setChangedTask] = React.useState(taskTitle ? taskTitle : '')
    const [message, setMessage] = React.useState('')


    console.log(changedTask)

    React.useEffect(() => {
        if (inputValue) {
            if (inputValue.length > 4) {
                setMessage('')
            } else {
                setMessage('it requires 5 symbols, but no more than 50')
            }
        }
    }, [inputValue])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!message) {
            // если t.title === inputValue - filter вернет массив из одинаковых task'ов
            if (!initialTodosList.filter(t => t.title.toLowerCase() === inputValue.toLowerCase()).length) {
                addTask(inputValue)
                setInputValue('')
                setShowInput('')
            } else {
                setMessage('The same task has already been added!')
            }
        }
    }


    const handleInput = (e) => {
        setChangedTask('')
        setShowInput(e.target.value)
        setInputValue(e.target.value.trim())
    }


    return (
        <div className="form">

            <form className="form__container" onSubmit={handleSubmit}>
                <label className="form__label" htmlFor="input_text"></label>
                <input
                    className="form__input"
                    style={{ paddingLeft: '30px' }}
                    id="input_text"
                    type="text"
                    placeholder='...todo'
                    value={
                        showInput ?
                            showInput : changedTask ?
                                changedTask : ''
                    }
                    required
                    onChange={handleInput}
                    minLength="5"
                    maxLength="50"
                    pattern='^[0-9A-Za-zА-Яа-яЁё\.\s\-]{5,50}$'
                    title="The field can only contain latin, cyrillic, numbers, space or hyphen"
                />

                {
                    message &&
                    <span style={{ color: "red" }}>{message}</span>
                }

                {
                    inputValue && !message ?
                        <button className="form__btn btn waves-effect waves-light" type="submit">add</button>
                        :
                        <button disabled className="form__btn btn waves-effect waves-light" type="submit">add</button>
                }

            </form>
        </div>
    )
})

export default Form
