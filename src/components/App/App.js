import React from 'react'
import './App.css'

import { TodosContext } from '../../contexts/TodosContext'
import Form from '../Form/Form'
import TodoList from '../TodoList/TodoList'
import Preloader from '../Preloader/Preloader'
import api from '../../utils/api'

const App = () => {

  const [initialTodosList, setInitialTodosList] = React.useState([])
  const [isSubmitting, setIsSubmitting] = React.useState(false)


  // получение от сервера списка задач
  React.useEffect(() => {
    setIsSubmitting(true)
    api.getTasks()
      .then(tasks => {
        tasks.length && setInitialTodosList(tasks)
      })
      .catch(err => console.log(err))
      .finally(() => setIsSubmitting(false))
  }, [])


  // добавление task'a в список из формы
  const addTask = (task) => {
    // ...post-запрос на сервер
    setInitialTodosList(initialTodosList.concat(
      {
        completed: false,
        id: new Date(),
        title: task,
        userId: 1,
        date: new Date().toISOString(),
      }
    ))
  }


  // обновление списка после клика чекбокса и удаления
  const handleChangeTodosList = (updatedTodosList) => {
    setInitialTodosList(updatedTodosList)
  }


  return (
    <TodosContext.Provider value={initialTodosList}>
      <div className="app">

        <h1>My Todo App</h1>

        <Form
          addTask={addTask}
          placeholder='...todo'
        />

        {isSubmitting && <Preloader />}

        <TodoList
          handleChangeTodosList={handleChangeTodosList}
          isSubmitting={isSubmitting}
        />

      </div>
    </ TodosContext.Provider>
  )
}

export default App
