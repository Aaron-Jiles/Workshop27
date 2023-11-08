import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      let response = await fetch ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: 'get',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      let result = response.json()
      setSuccessMessage(result.message)
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  }

  return (
    <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
          
    </div>
  );
}