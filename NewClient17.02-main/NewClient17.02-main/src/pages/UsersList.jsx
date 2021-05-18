import React, { useState, useEffect } from 'react';
import api from '../services/userService'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import {WrapperList, Update,Delete} from '../style/style.js';

 const UpdateUser=(user_id) =>{

    const updateUser = event => {
        event.preventDefault()
        window.location.href = `/users/update/${user_id}`
    }
        return <Update onClick={updateUser}>Update</Update>   
}

 const  DeleteUser =(user_id) =>{
   
    const deleteUser = event => {
        event.preventDefault()
        if (
            window.confirm(
                `Do tou want to delete the user ${user_id} permanently?`,
            )
        ) {
            api.deleteUserById(user_id)
           .catch(error => {  
               var response =JSON.stringify(error.response.data.error)
               window.alert(response+ " status: "+error.response.status);
                     
           })
            window.location.reload()
        }
    }
        return <Delete onClick={deleteUser}>Delete</Delete>
}

// const  DecryptPassword =(password) =>{


// }
export default function UsersList() {
  
      const [isLoading,setIsLoading]=useState(false);
      const [users, setUsers]=useState([]);
    //   const [isLogged, setIsLogged]=useState(false);

    useEffect(()=>{
       async function usersUpdate()
        {
            {console.log("hello")}
            setIsLoading(true);
            await api.getAllUsers().then(users => {       
                    setUsers(users.data.data);
                    setIsLoading(false);
            })
            .catch(error => {  
                var response =JSON.stringify(error.response.data.error);
                window.alert(response+ " status: "+error.response.status);
                      
            })
        }
        usersUpdate();
    },[])

        console.log('TCL: UsersList -> render -> users', users)

            const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Username',
                accessor: 'username',
                filterable: true,
            },
            {
                Header: 'Password',
                accessor: 'password',
                filterable: true,
                // Cell: (props)=> {
                //     return (
                //         <button value={cell.row.values.name} onClick={props.handleClickGroup}>
                //         {cell.row.values.name}
                //       </button>
                //     )
                // },

            },
            {
                Header: 'Role',
                accessor: 'role',
                filterable: true,
            },

            {
                Header: '',
                accessor: '',
                Cell: (props)=> {
                    return (
                        <span>                   
                            {DeleteUser(props.original._id)}
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: (props)=> {
                    return (
                        <span>
                           {UpdateUser(props.original._id)}
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!users.length) {
            showTable = false
        }

        return (
            <WrapperList>
                {showTable && (
                    <ReactTable
                        data={users}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </WrapperList>
        )  
}

