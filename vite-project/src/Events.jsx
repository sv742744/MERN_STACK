function Events() {
    function press(e){
        console.log("focuse mode on")
    }
  return (
    <>
        <div className="">
            <button onMouseOver={()=> alert("Jerry.files")}>Jerry</button>
            <button onMouseLeave={()=> alert("Tom.files")}>Tom</button>
        </div>
        <input type="text" onFocus={press} />
    </>
  )
}

export default Events;
