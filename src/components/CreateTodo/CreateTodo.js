import React, { useState } from 'react'

const CreateTodo = (props) => {
    const[todo, setTodo] = useState(
        {
        description: '',
        responsible: '',
        priority: '',
        completed: false
    })
    const handleChange = event => setTodo({...todo, [event.target.name]: event.target.value});
    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Form submitted:`)
        console.log(`Todo description: ${todo.description}`)
        console.log(`Todo responsible: ${todo.responsible}`)
        console.log(`Form priority: ${todo.priority}`)
        console.log(`Todo completed: ${todo.completed}`)
        setTodo(todo);
        setTodo({description: '',
        responsible: '',
        priority: '',
        completed: false})
      };

    return ( 
        <div style={{marginTop: 20}}>
            <h3>Create New Todo</h3>
            <form onSubmit={handleSubmit} >
            <div className="form-group">
                        <label>Description: </label>
                        <input  
                        type="text" name='description'
                                className="form-control"
                                value={todo.description}
                                placeholder='Description'
                                autoComplete='off'
                                onChange={handleChange}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                name='responsible'
                                className="form-control"
                                value={todo.responsible}
                                placeholder='Responsible'
                                autoComplete='off'
                                onChange={handleChange}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priority"
                                    id="priorityLow"
                                    value="Low"
                                    checked={todo.priority==='Low'}
                                    onChange={handleChange}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priority"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={todo.priority==='Medium'}
                                    onChange={handleChange}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priority"
                                    id="priorityHigh"
                                    value="High"
                                    checked={todo.priority==='High'}
                                    onChange={handleChange}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
            </form>
        </div>
     );
}
 
export default CreateTodo;