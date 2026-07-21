// src/Count.jsx
import { useState, useEffect } from "react";
import "./count.css";
import Parent from "./Parent.jsx";

// Fixed: Changed from "../" to "./" to look inside the correct folder
import UserContext from "./UserContext.jsx"; // Fixed capital letter 'U'


function Count() {
    const [count, setCount] = useState(0);
    const [mobile, setMobile] = useState(false); 
    const [lunch, finishluch] = useState("");

    // Dynamic browser tab title updater
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <>
            {/* 1. Counter Application */}
            <h1 className="count">Count: {count}</h1>
           
            <div className="counting">
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div> 

            {/* 2. Device Toggle State */}
            <h2>Phone: {mobile ? "Android" : "iPhone"}</h2>
            <button onClick={() => setMobile(!mobile)}>Change Device</button>

            {/* 3. Controlled Input State */}
            <div style={{ marginTop: "20px" }}>
                <h1>Lunch: {lunch}</h1>
                <input 
                    type="text" 
                    placeholder="Biryani" 
                    value={lunch} 
                    onChange={(e) => finishluch(e.target.value)}
                />
            </div>

            {/* 4. Manual Prop Drilling Method */}
            <div style={{ marginTop: "30px", borderTop: "1px dashed gray", paddingTop: "20px" }}>
                <h3>Props Approach:</h3>
                <Parent name="Sri Venkateswara Swami" />
            </div>

            {/* 5. Global Context Provider Method */}
            <div style={{ marginTop: "20px", borderTop: "1px dashed gray", paddingTop: "20px" }}>
                <h3>Context Approach:</h3>
                <UserContext.Provider value="Radha Krishna">
                    <Parent /> 
                </UserContext.Provider>
            </div>
        </>
    );
}

export default Count;
