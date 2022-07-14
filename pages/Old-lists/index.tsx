import ReadFromDB from "../../firebase/readFromDB";
import uniqid from "uniqid";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import List from "./list";
import { Fragment, useEffect, useRef, useState } from "react";
import SearchBar from "./search-bar";
import Container from "../../node_modules/react-bootstrap/esm/Container";

// Need: getting data from db
// Search bar and button
// renderd list.

function OldLists() {
  const [showOldLists, setShowOldLists] = useState(false);
  const [oldLists, setOldLists] = useState();
  const [formState, setFormState] = useState(null);
  let dbRef = useRef([]);

  // send a call to the database
  let avdeling: string;
  let navn: string;
  let dbData: any[];

  //const readFromDB = async function () {
  const db = getDatabase();
  const tellingerPath = ref(db, "Tellinger");
  onValue(tellingerPath, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data !== null) {
      dbRef.current = [...Object.values(data)];

      //console.log("Hei fra useRef", dbRef.current);
    }
  });
  useEffect(() => {}), [];

  // const newArr = Object.values(dbData);
  // const returnArr = Object.entries(newArr);
  // console.log(returnArr);
  //};

  //readFromDB();
  //console.log(oldLists);
  // Map out old lists from DB

  const renderList = function () {
    console.log(dbRef.current.filter((a) => (a.avdeling = "avdeling 8")));
    setShowOldLists(true);
    console.log(showOldLists);
  };

  return (
    <div className="margin--top--medium bg-light">
      <Container>
        <h1>Finn gamle lister</h1>
        <div>
          <Button onClick={renderList}>Console.log liste</Button>
        </div>
        <SearchBar formState={formState} setFormState={setFormState} />
        <h1>her kommer liste</h1>
      </Container>
    </div>
  );
}
export default OldLists;
