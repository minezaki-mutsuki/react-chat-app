import { useEffect, useState } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore"

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    const userData = collection(db, "users")
    getDocs(userData).then((snapshot) => {
      setUser(snapshot.docs.map((doc) => ({...doc.data()})))
    })
  }, [])

  return (
    <>
    <h1>react&firebase</h1>
    {user.map((item, index) => (
      <div key={index}>
        <p>{item.email}</p>
        <p>{item.name}</p>
      </div>
    ))}
    </>
  );
}

export default App;
