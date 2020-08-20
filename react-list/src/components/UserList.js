import React from 'react';
import App from "./App";

const UserList = (props) =>{
    const superCompleja = () => {
        console.log( 'calculos super complejos');
        return [
            {
                firstName: 'jeff',
                lastName: 'llumiquinga',
            },
            {
                firstName: 'andres',
                lastName: 'llumiquinga',
            },
            {
                firstName: 'jose',
                lastName: 'llumiquinga',
            },
        ];
    }

    const [ users, setUsers ] = React.useState( props.users);
    const [ count, setcount ] = React.useState(0);

    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    };

    const handleAddUser = () => {
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;

        const newUser = {
            firstName,
            lastName
        }
        setUsers( (prevState) => {
            return [
                ...prevState,
                newUser
            ];
        });
    }
    return (
        < div >

        {count}
        <button onClick={ () => setcount(count + 1)}>sumar</button>
    <button onClick={ () => setcount(0)}>resetear</button>

    <div>
    <label htmlFor=''>Nombre</label>
        <input type='text' id='firstName' />

        <label htmlFor=''>Apellido</label>
        <input type='text' id='lastName' />

        <button onClick = {handleAddUser}>Agregar</button>
        </div>
        < ul >
        {
            users.map((user, index) => {
                return<li key = {`user-${index}`}>{ formatName( user ) } </li>
            })

        }
        < /ul>
        < /div>

);
}
export default UserList;