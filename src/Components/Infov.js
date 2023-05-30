import hoja from '../Assets/hoja.jpg';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";

const Div = styled.div`
 background-color: #f5f5f5;
  color: black;
  padding: 10px;
  box-shadow: 5px 5px 5px 0px lightgray;
`;
function Infod(props) {
  return (
    <Div>
      <Card.Body style={{"border": "1px solid black","border-radius":"5px", "box-shadow": "5px 5px 5px 0px black","background":"rgb(221, 218, 218)" }}>
        <Card.Title style={{"font-family":" sans "}}><h1>{props.title}</h1></Card.Title>
        <Card.Img style={{"width":"auto"}} variant="top" src={hoja} />
        <Card.Text style={{"font-family":" cursive "}}>
        <p>{props.name}</p>
        </Card.Text>
        
      </Card.Body>
    </Div>
  );
}
export default Infod;