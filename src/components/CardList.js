import data from "../data/fakeData";
import { Col, Row } from "react-bootstrap";
import CardItem from "./CardItem";

const CardList = () => {
  const { near } = data;
  return (
    <Row>
      {near.map((item, index) => (
        <Col key={index}>
          <CardItem item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
