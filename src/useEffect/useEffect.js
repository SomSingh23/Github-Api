import { useEffect, useState } from "react";
import axios from "axios";
export default function Som() {
  //   let [ctr, setCtr] = useState(0);
  //   let [ctr2, setctr2] = useState(0);
  let [loaded, setLoaded] = useState(false);
  console.log(loaded);
  let [activity, setActivity] = useState("");
  var randomActivity = async () => {
    setLoaded((prev) => !prev);
    let data2 = await axios.get("https://www.boredapi.com/api/activity");
    // console.log(data2);
    let finalData = data2.data;
    setLoaded((prev) => !prev);
    setActivity(finalData.activity);
    console.log(finalData.activity);
  };
  useEffect(() => {
    randomActivity();
  }, []);
  //   let inCtr = () => {
  //     setCtr((previous) => previous + 1);
  //   };
  //   let inCtr2 = () => {
  //     setctr2((previous) => previous + 2);
  //   };
  useEffect(() => {
    console.log("effect hai");
  }, []);
  return (
    <>
      {loaded ? <h1>Loading....</h1> : <h1>{activity}</h1>}
      <button onClick={randomActivity}>New Activity</button>
    </>
  );
}
