import { useState } from "react";

export default function Form() {
  console.log("rendering");
  let [name, setName] = useState({ firstName: "", lastName: "" }); // use objects inside useState because that will be more generic
  let [isValid, setIsValid] = useState({ firstName: false, lastName: false }); //

  let _dontGo = (e) => {
    e.preventDefault();
    console.log("trying");
    if (isValid.firstName && isValid.lastName) {
      console.log(name.firstName, name.lastName);
      console.log("success....");
    }
  };
  let callMe = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    // name[e.target.placeholder] = e.target.value;
    console.log(e.target.value.length);
    setName((previous) => {
      return { ...previous, [e.target.placeholder]: e.target.value };
    });
    if (e.target.value.length > 0)
      setIsValid((previous) => {
        return { ...previous, [e.target.placeholder]: true };
      });
    else if (e.target.value.length === 0)
      setIsValid((previous) => {
        return { ...previous, [e.target.placeholder]: false };
      });
  };
  return (
    <>
      <form>
        <label htmlFor="som">First Name</label>
        <input
          type="text"
          placeholder="firstName"
          id="som"
          value={name.firstName}
          onChange={callMe}
        ></input>
        <br />
        <label htmlFor="som2">Last Name</label>
        <input
          type="text"
          placeholder="lastName"
          id="som2"
          value={name.lastName}
          onChange={callMe}
        ></input>
        <br />
        <button onClick={_dontGo}>Submit</button>
      </form>
    </>
  );
}
