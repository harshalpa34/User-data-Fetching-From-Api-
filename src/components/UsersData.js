import UsersForm from './UsersForm'
import UsersList from './UsersList'
import { useState } from 'react'

let Users = [
    {
        name: 'Hassh' ,
        age : 50,
        id: "1"
    },{
            name: 'yasg' ,
            age : 500,
            id: "2"
        },{
            name: 'hary' ,
            age : 550,
            id: "5"
        },
        {
            name: 'fdt' ,
            age : 50,
            id: "4"
        }];

const UsersData = (props) => {


    const [addUser, setaddUser] = useState(Users)
    // const [DeleteUser, setDeleteUser] = useState();
    const addUsers = (user) =>{
        // console.log(user)
        setaddUser((prevUsers) => {
            return [user, ...prevUsers]
          })
      
      console.log(addUser)
    }
    const deleteUserFuntion = (idforDeletion)=>{
        // addUser.splice(idforDeletion ,1);
        // console.log(addUser)
        // console.log(idforDeletion)
        setaddUser(prevUsers => {
            const addUser = prevUsers.filter(user => user.id !== idforDeletion);
            return addUser;

        // setaddUser(addUser)
    })
}

   
    return (
        <div className="container">
            <UsersForm input={addUsers} />
            <UsersList data={addUser} deleteId = {deleteUserFuntion}/>
        </div>
    )
}

export default UsersData;