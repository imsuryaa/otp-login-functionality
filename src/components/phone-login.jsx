import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
const [showOtpInput, setShowOtpInput] = useState(false)


  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    // phone validations
    const regex = /[^0-9]/g
    if(phoneNumber.length<10 || regex.test(phoneNumber)) {
        alert("Invalid Phone Number")
        return
    }
    // Call BE API
    // Show OTP Field
    setShowOtpInput(true)
  };

  const onOtpSubmit = (otp) => {
    console.log('otp submitted')
  }

  return (
    <div>
      {!showOtpInput ? <form onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="Enter a Phone Number"
        />
        <button type="submit">Submit</button>
      </form> : <div>
        <p>Enter OTP sent to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>}
    </div>
  );
};

export default PhoneOtpForm;
