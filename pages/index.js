import StartButton from "../components/start-button";
import firebase from "../firebase/firebaseConfig";
import { Container, Button } from "react-bootstrap";
import { Fragment } from "react";
import Link from "next/link";
import SignUp from "../context/signUp";

function Home(props) {
  const label1 = "Ny liste";
  const label2 = "Se gamle lister";
  return (
    <Fragment>
      <Container className="d-flex align-items-center justify-content-center flex-column ">
        <h2 className="text-center mt-4">Velkommen til Tellelista</h2>
        <Link href={"/login-user"} passHref>
          <Button className="center btn btn-lg">Login</Button>
        </Link>
        <h4 className="mt-4">Eller opprett ny bruker</h4>
        <Link href={"/new-user"} passHref>
          <Button className="center btn btn-lg">Ny bruker</Button>
        </Link>
      </Container>
    </Fragment>
  );
}

export default Home;
