 import OIP from '../Assets/OIP.jpg';

import Card from 'react-bootstrap/Card';
// import './CardUno.css';
import styled from "styled-components";

const Div = styled.div`
 background-color: #f5f5f5;
  color: black;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
`;
function Info(props) {
  return (
    <Div>
      <Card.Body style={{"border": "1px solid black","border-radius":"5px", "box-shadow": "5px 5px 5px 0px black","background":"rgb(221, 218, 218)" }}>
        <Card.Title style={{"font-family":" sans "}}><h1>{props.title}</h1></Card.Title>
        <Card.Img style={{"width":"250PX"}} variant="top" src={OIP} />
        <Card.Text style={{"font-family":" cursive "}}>
        <p>{props.name}</p>
        </Card.Text>
        
      </Card.Body>
    </Div>
  );
}

export default Info;