import React from "react";

const TodoList = () => {
    const [todos, setTareas] = React.useState([]);


    const handleAddTask = () =>{
        const task = document.querySelector( '#task').value;
        setTareas( prevState => [ ...prevState, task]);
        document.querySelector( '#task').value = '';
    }



    const handleDeleteTask = ( index ) => {
        setTareas( ( prevState ) => {
            return prevState.filter( ( task, i ) => i !== index );
        } );
    };
    return(

        <div>

        <div>
        <label htmlFor='task'>Tarea</label>
        <input type='text' id='task' />

        <button onClick={ handleAddTask }>Agregar tarea</button>
    </div>
<h1>Tareas pendientes</h1>
    < ul >
    {
        todos.map((task, index) => {
            return <li >{ task } <button onClick={ () => handleDeleteTask( index )}>Eliminar</button>
            <button>Tarea Completada</button></li>

        })
    }

    < /ul>

        <h1>Tareas completadas</h1>
        <ul>

        </ul>

        </div>
    );
}

export default TodoList;