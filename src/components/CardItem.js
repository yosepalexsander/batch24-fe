import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function CardItem({ item, isProduct, handleClick }) {
  const router = useHistory();

  const handlePushToDetail = (id) => {
    console.log(id);
    router.push(`restaurant/${id}`);
  };
  return (
    <>
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img
        variant="top"
        src={item.image}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{isProduct ? item.name : item.restaurant}</Card.Title>
        <Card.Text>{isProduct ? item.price : item.location}</Card.Text>
        {isProduct && (
          <Button variant="warning" onClick={() => handleClick(item)}>
            Add to Cart
          </Button>
        )}
        {!isProduct && (
        <Button variant="secondary" onClick={() => handlePushToDetail(item.id)}>
          Detail
        </Button>
        ) }
      </Card.Body>
    </Card>
    </>
  );
}

export default CardItem;
