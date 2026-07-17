const show=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const phone=document.getElementById("number").value;
    let gender="";
    const genders=document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if(genders[i].checked){
            gender=genders[i].value;
            break;
        }
    }
    let qualification=[];
    const qualify=document.getElementsByClassName("Qualification");
    for(let i=0;i<qualify.length;i++){
        if(qualify[i].checked){
            qualification.push(qualify[i].value);
        }
    }
    const date=document.getElementById("date").value;
    const image=document.getElementById("image").files[0];
    const imgname=image ? image.name : "no file is selected";
    document.getElementsByClassName("result")[0].innerHTML=
    `
    <h2>Details</h2>
    <p><b>Name : </b> ${name}</p>
    <p><b>email : </b> ${email}</p>
    <p><b>password : </b> ${password}</p>
    <p><b>phone No : </b> ${phone}</p>
    <p><b>gender : </b> ${gender}</p>
    <p><b>qualifications : </b> ${qualification}</p>
    <p><b>D.O.B : </b> ${date}</p>
    <p><b>file : </b> ${imgname}</p>

    `;
};