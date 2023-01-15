// import React from "react";
import LIst from './LIst'
const UsersList = (props) => {
  // console.log(Name)
  // const data=(event)=>{
  //     console.log(event);

  // }


  const deletefuntion = (idforDeletion)=>{
    props.deleteId(idforDeletion);
    // console.log(idforDeletion)
  }
  // console.log(props.data)
  return (
    <>
      <table className="table m-5">
    
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {props.data.forEach((user) => (
            <LIst key ={user.id} name={user.name} age={user.age} id={user.id} deleteid ={deletefuntion}/>
          ))}
        </tbody>
      </table>
    </>
  )

  //  props.data.name;
}

export default UsersList
