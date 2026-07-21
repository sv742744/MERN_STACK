import { useState } from "react";
function Forms()
{
    const[user ,setUser]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        gender:"",
        skills:""
    });
    const change=(e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        );
        
    };
     const handleSubmit =(e)=>
     {
        e.preventDefault();
        alert("Form Submitted.");

    };
     return(
            <div style={{marginTop:"20px"}}>
                <h1>Form</h1>
                <form onSubmit={handleSubmit}>
                    <label ><b>Name :</b></label>
                    <input type="text" name="name" value={user.name} onChange={change}/>
                    <br/>
                    <label ><b>Email :</b></label>
                    <input type="email" name="email" value={user.email} onChange={change}/>
                    <br/>
                    <label ><b>Password :</b></label>
                    <input type="password" name="password" value={user.password} onChange={change}/>
                    <br/>
                    <label ><b>Phone :</b></label>
                    <input type="number" name="phone" value={user.phone} onChange={change}/>
                    <br/>
                    <label ><b>Gender :</b></label>
                    <input type="radio" name="gender" value="male" onChange={change}/>Male
                    <input type="radio" name="gender" value="female" onChange={change}/>Female
                    <br/>
                    <label ><b>Skills :</b></label>
                    <select name="skills" value={user.skills} onChange={change}>
                        <option value="">Select</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
                <div className="">
                    <table cellSpacing={"2px"} cellPadding={"5px"} >

                        <tbody>
                        <tr>
                            <th>Name :</th>
                            <th>{user.name}</th>
                        </tr>
                        <tr>
                            <th>E-Mail :</th>
                            <th>{user.email}</th>
                        </tr>
                        <tr>
                            <th>Phone No :</th>
                            <th>{user.phone}</th>
                        </tr>
                        <tr>
                            <th>Gender :</th>
                            <th>{user.gender}</th>
                        </tr>
                        <tr>
                            <th>Skills :</th>
                            <th>{user.skills}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

     );
}
export default Forms;