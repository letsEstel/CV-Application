import { useState } from "react";

export function InputGeneral() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showState, setShowState] = useState(false);
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function showCVToggle() {
    setShowState(!showState);
  }
  return (
    <>
      <h3>Input your basic infomation:</h3>
      <div>
        <label>
          First name:{" "}
          <input value={firstName} onChange={handleFirstNameChange} />
        </label>
      </div>
      <div>
        <label>
          Last name: <input value={lastName} onChange={handleLastNameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:{" "}
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          Phone Number:{" "}
          <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
        </label>
      </div>
      <button onClick={showCVToggle}>Preview</button>
      {showState && (
        <div>
          <div>First Name :{firstName}</div>
          <div>Last Name:{lastName}</div>
          <div>Email :{email}</div>
          <div>Phone number:{phoneNumber}</div>
        </div>
      )}
    </>
  );
}
