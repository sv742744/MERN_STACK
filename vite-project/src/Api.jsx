import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
function Api() {
    const API="https://jsonplaceholder.typicode.com/users";

    const [user,setUser]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    
    useEffect(()=>{
        getusers();
    },[]);

    async function getusers() {
        try {
            const response=await axios.get(API);
            setUser (response.data);

        } catch (error) {   
        console.log(error);
        }
    }
    async function adduser() {
        if(name==""||email==""){
            alert("please fill the details");
            return;
        }try {
            const response=await axios.post(API,{name,email,});
            setName("");
            setEmail("");
            alert(" user added successfully .");

        } catch (error) {
            console.log("error");
            
        }
    }
    
    async function updateuse(id) {
        try {
            const response=await  axios.put(`${API}/${id}`,
            {
                name:"jeevan",
                email:"jeevan189@gmail.com",
            });
            setUser(
                user.map((user)=>user.id==id?response.data:user)
            )
        } catch (error) {
            console.log(error);
        }
       
    }

    async function deleteuser() {
        try {
            await axios.delete(`${API}/${id}`);
            setUser(user.filter((user)=>
                user.id!=id
            ));
            alert("User Delated");
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <>

    <div>
        <h1>React CRUD operations</h1>
        <label><b>Name : </b></label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label><b>E-Mail : </b></label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <button onClick={adduser}>ADD</button><br />
        {user.map((user)=>(
            <div
            key={user.id} style={{margin:"20px",border:"2px solid green" }}>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3><button> update</button><button>Delete</button>
            </div>
        ))}
        </div>
    </>
  );
}

export default Api;