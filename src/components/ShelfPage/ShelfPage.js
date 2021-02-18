import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function ShelfPage() {
  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelf);
  const user = useSelector((store) => store.user);
  const [item, setItem] = useState({
    image_url: "",
    description: "",
    user_id: user.id,
  });
  useEffect(() => {
    dispatch({ type: "FETCH_SHELF" });
  }, []);

  const getItems = () => {
    dispatch({ type: "SET_ITEMS" });
  };
  const addItem = (evt) => {
    event.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: item });
    setItem({
      image_url: "",
      description: "",
      user_id: user.id,
    });
  };

  const handleDelete = (itemId) => {
    console.log("clicked handleDelete");
    dispatch({ type: "DELETE_ITEM", payload: { itemId } });
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
        <button type="submit">Submit</button>
      </form>
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <table>
        <thead>
          <tr>
            <th>Item Description</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {shelf.map((item) => {
            if (item.user_id === user.id) {
              return (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.image_url}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.image_url}</td>
                  <td></td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShelfPage;
