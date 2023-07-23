import axios from "axios";
import { useState } from "react";
// import Form from "./form";
export default async function Api() {
let [username, setUsername] = useState({ username: "", isValid: false });
  let [buttonValid, setButtonValid] = useState(false);
  let [formSubmit, setFormSubmit] = useState(false);
  let baseUrl = "https://api.github.com/users";
  let [details, setDetails] = useState({});

  //   fetchData();
  //   console.log(details.bio);
  //   return (
  //     <>
  //
  //     </>
  //   );
  let afterSubmit = (e) => {
    let somS = async () => {
      e.preventDefault();
      setFormSubmit((p) => true);
      console.log(username);
      let x = await axios.get(`${baseUrl}/${username.username}`);
      let data = x.data;

      setDetails((p) => {
        return { ...data };
      });
      console.log(username.username);
    };
    somS();
  };

  let onChange = (e) => {
    setFormSubmit((p) => false);
    if (e.target.value.length > 0) {
      setButtonValid((prev) => true);
      setUsername((previous) => {
        return {
          ...previous,
          [e.target.placeholder]: e.target.value,
          isValid: true,
        };
      });
    } else {
      setButtonValid((prev) => !prev);
      setUsername((previous) => {
        return {
          ...previous,
          [e.target.placeholder]: e.target.value,
          isValid: false,
        };
      });
    }
  };
  console.log(formSubmit);
  return (
    <>
      <form>
        <label htmlFor="user">search</label>
        <input
          type="text"
          placeholder="username"
          id="user"
          onChange={onChange}
        ></input>
        {buttonValid && <button onClick={afterSubmit}>Submit</button>}
      </form>
      {formSubmit && (
        <div>
          <p>DATA</p>
          <p>{details.login}</p>
          <p>{details.location}</p>
          <p>{details.bio}</p>
          <img
            height="200px"
            width="200px"
            src={details.avatar_url}
            alt="dam"
          />
        </div>
      )}
    </>
}
