import { useParams, useLocation } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

import data from "../data/fakeData";
import NotFound from "./NotFound";

const DetailProduct = ({ match }) => {
  // approach 1: use match property from react-router-dom
  // const {params} = match;

  // approach 2: using hooks useParams
  const params = useParams();
  const location = useLocation();
  console.log("location: ", location);

  const query = new URLSearchParams(location.search);
  console.log("query for name: ", query.get("name"));

  const itemMatchId = data.near.find((item) => item.id === parseInt(params.id));

  console.log(itemMatchId);
  if (!itemMatchId) {
    return <NotFound page={`Product with id: ${params.id}`} />;
  }

  return (
    <Row>
      <Col xs={6}>
        <img src={itemMatchId.image} alt="product" className="img-fluid" />
      </Col>
      <Col>
        <Row>
          <p>{itemMatchId.restaurant}</p>
        </Row>
        <Row>
          <p>location: </p>
          <p>{itemMatchId.location}</p>
        </Row>
        <Row>
          <p>description: </p>
          <br />
          <p>{itemMatchId.description}</p>
        </Row>
      </Col>
    </Row>
  );
};

export default DetailProduct;
