import React from "react";
import uniqid from "uniqid";
import Table from "react-bootstrap/Table";

function List(props) {
  const { loading, setLoading, dbRef } = props;

  const dbArray = Object.values(dbRef);

  //console.log("Object.values", dbArray);

  // Sette name i filter fra user search bruke backticks
  // string methoder. Sette alt som lowercase så sette første bokstav til Uppercase. fjerne alt white-space så legge til whitespace på [8]
  const clean = dbArray
    //.flat()
    .reverse()
    .filter((e) => e != "Hei fra context");
  //.filter((e) => e != "Telling");
  // console.log("Clean array: ", clean);
  const [telling1, telling2, telling3] = clean;
  console.log("log fra telling", telling1);

  // function getAvdelingName(arr) {
  //   arr.map((a) => {
  //     console.log(a.avdeling);
  //   });
  // }

  // getAvdelingName(telling1);
  const avdelingName1 = "temp";
  return (
    <>
      <h1>her kommer liste</h1>

      <h2 className="text-bold shadow-xl text-blue-600"></h2>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <ul className="list-group" key={uniqid()}>
            {telling1.map((i) => {
              return (
                <li key={uniqid()} className="list-group-item mb-1 shadow">
                  {i.navn}
                </li>
              );
            })}
          </ul>
        </>
      )}

      <pre>
        <React.Fragment>{JSON.stringify(clean)}</React.Fragment>
      </pre>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Avdeling</td>
          </tr>
          <tr>
            <td>Dato</td>
          </tr>
          <tr>
            <td>Barn</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default List;
