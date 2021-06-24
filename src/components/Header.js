import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Badge,
  Button,
  FormControl,
  InputGroup,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";

import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

import ModalSignin from "./ModalSignin";
import brand from "../assets/images/brand.svg";

import data from "../data/fakeData";

import "../styles/customStyle.css";
const Header = () => {
  const {state, dispatch} = useContext(UserContext);
  const {state: cartState} = useContext(CartContext);
  console.log("user context state", state)
  console.log("cart context state", cartState)
  const [search, setSearch] = useState("");
  const [show, setshow] = useState(false);

  useEffect(() => {
    if (!state.isLogin) {
      setshow(true);
    }
    return () => {
      setshow(false)
    }
  }, [state])

  const router = useHistory();
  const handlePushToSignUp = () => {
    router.push("/signup");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = data.near.find((item) => item.restaurant === search);

    if (product) {
      return router.push(`/product/${product.id}`);
    }
  };

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" })
  };

  return (
    <Navbar expand="lg">
      <Link to="/" className="navbar-brand">
        <img src={brand} alt="brand" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/About" className="nav-link">
            About
          </Link>
          <Link to="/property" className="nav-link">
            Profile
          </Link>
        </Nav>
        <Form className="d-flex mr-auto">
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-auto"
              aria-describedby="search-button"
              name="search"
              value={search}
              onChange={handleChange}
            />
            <InputGroup.Append>
              <Button id="search-button" onClick={handleSubmit}>
                search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        {state.isLogin && (
          <>
            <p className="nav-link mr-3 my-2">Welcome, 
            <span><Link to="/profile ">{state.user.name}</Link></span></p>
            <Link to="/cart" className="nav-link mr-3 my-2">Cart {' '}
            <Badge className="bg-secondary text-white">{cartState.carts.length}</Badge>
            </Link>
            <Button variant="danger" className="my-2" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
        {!state.isLogin && (
          <>
            <Button className="mr-3 my-2" onClick={handlePushToSignUp}>
              Sign up
            </Button>
            <Button className="my-2" onClick={() => setshow(true)}>
              Sign in
            </Button>
          </>
        )}
      </Navbar.Collapse>
      <ModalSignin show={show} handleClose={() => setshow(false)} handleLogin={dispatch}/>
    </Navbar>
  );
};

// class Header extends Component {
//   constructor(props) {
//     super();
//     this.title = "Dumbways Batch 24"
//   }

//   render() {
//     return (
//       <header className="header">
//         <h1>{this.title}</h1>
//       </header>
//     )
//   }
// }

export default Header;
