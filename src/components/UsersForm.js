import React from 'react'
import { useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'
import Modal from './Modal'

const UsersForm = (props) => {
  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Error, setError] = useState()
  const NameHandler = (event) => {
    setName(event.target.value)
  }
  const AgeHandler = (event) => {
    setAge(event.target.value)
  }

  const SubmitForm = (event) => {
    event.preventDefault()
    const tempuser = {
      name: Name,
      age: Age,
      id: Math.random().toString(),
    }
  
    if(Name.toString().trim().length=== 0 || Age.trim().length === 0){
      setError({
        title: 'Invalid Data',
        message: 'Please Enter Data before Submitting'
      })
    }
    if (Age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age'
      })
    } else {
      props.input(tempuser)
      setName('')
      setAge('')
    }
  }

  return (
    <div>
      {Error && <Modal title = {Error.title} message={Error.message}></Modal>}
      
   
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button> */}

      <Card>
        <div className="container">
          <div className="container">
            <form onSubmit={SubmitForm}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={Name}
                  onChange={NameHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  type="text"
                  className="form-control"
                  value={Age}
                  onChange={AgeHandler}
                />
              </div>

              <Button type="submit" className="btn btn-primary" data-toggle ={Error ? 'modal': ''} data-target ={Error ? '#exampleModalCenter': ''}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default UsersForm
