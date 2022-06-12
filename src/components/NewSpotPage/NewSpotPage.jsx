import "./NewOrderPage.css";
import React from "react";
import { Link } from "react-router-dom";
import SpotDetail from "../../components/SpotDetail/SpotDetail";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

class NewSpotPage extends React.Component {
  // initial state of the app when it first loads
  state = {
    menuCategories: [],
    activeCategory: "",
    lineItems: [],
    menuItems: [],
  };


  // send cart to server
  handleCreate = async () => {
    try {
      let jwt = localStorage.getItem('token')
      let fetchResponse = await fetch("/api/spots", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": 'Bearer ' + jwt },
        body: JSON.stringify({ lineItems: this.state.lineItems }), // <-- send this object to server
      });
      let serverResponse = await fetchResponse.json(); // <-- decode fetch response
      console.log("Success:", serverResponse); // <-- log server response

      this.setState({ lineItems: [] }); // if order sent without errors, set state to empty
    } catch (err) {
      console.error("Error:", err); // <-- log if error
    }
  };

  // lifecycle method that runs once. fetch the menu from the DB.
  async componentDidMount() {
    try {
      let fetchItemsResponse = await fetch("/api/items"); // <-- get data from server (Stream object)
      let fetchCatsResponse = await fetch("/api/categories");
      let items = await fetchItemsResponse.json(); // <------- convert fetch response into a js object/array
      let catsObjects = await fetchCatsResponse.json();
      let catsStrings = catsObjects.map((c) => c.name); // convert [{"id":"0", name:"sandwiches"},{..] => ["sandwiches",..]
      this.setState({ menuItems: items, menuCategories: catsStrings });
    } catch (err) {
      console.error("ERROR:", err); // <-- log if error
    }
  }

  render() {
    return (
      <main className="NewOrderPage">
        <nav className="nav">
          <Logo />
          <CategoryList menuCategories={this.state.menuCategories} />
          <Link to="/orders" className="button btn-sm">
            PREVIOUS ORDERS
          </Link>
          <UserLogOut setUserInState={this.props.setUserInState}/>
        </nav>
        <MenuList
          menuItems={this.state.menuItems}
          handleAddToCart={this.handleAddToCart}
        />
        <OrderDetail
          handleCheckout={this.handleCheckout}
          lineItems={this.state.lineItems}
        />
      </main>
    );
  }
}

export default NewOrderPage;
