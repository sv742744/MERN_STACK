// src/GrandChild.jsx
import { useContext } from "react";

// FIXED: Changed "UserContext.jsx" to match your exact file name "UserContact.jsx"
import UserContext from "./UserContext.jsx"; 

function Grandchild(props) {
  // Move the hook out of the return block, place it here instead
  const name = useContext(UserContext);

  // The return block only contains clean JSX tags
  return (
    <h2>{name}</h2>
  );
}

export default Grandchild;
