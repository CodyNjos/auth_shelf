import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

function ShelfPage() {
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    image_url: "",
    description: "",
    user_id: "",
  });

  const getItems = () => {
    axois.get("/shelf").then((response) => {
      setItemArray(response.data);
    });
  };
  const addItem = (evt) => {
    event.preventDefault();
    console.log(item);
    setItem({
      image_url: "",
      description: "",
      user_id: "",
    });
  };
  return (
    <div className="container">
      <form onSubmit={addItem}>
        <label htmlFor="item-input">URL:</label>
        <input
          id="item-input"
          value={item.image_url}
          onChange={(e) => setItem({ ...item, image_url: e.target.value })}
        />
        <label htmlFor="Description">Description:</label>
        <input
          id="item-input"
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
        />
        <label htmlFor="item-input">User ID:</label>
        <input
          id="item-input"
          value={item.user_id}
          onChange={(e) => setItem({ ...item, user_id: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Description</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShelfPage;
