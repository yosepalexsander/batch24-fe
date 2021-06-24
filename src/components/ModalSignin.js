import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
const ModalSignin = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { handleClose, handleLogin, show } = props;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({
      type: 'LOGIN',
      payload: {
        id: 2,
        name: "Sundus",
        email: data.email,
        password: data.password
      }
    })

    setData({
      email: "",
      password: ""
    })
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <p className="h1 text-center font-weight-bold">Sign in</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalSignin;
