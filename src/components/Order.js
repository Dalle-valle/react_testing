import React from "react";

export default function Order(props) {
  return (
    <>
      <h2>Welcome to FooBar - May we take your order?</h2>
      <label htmlFor="githop">Githop</label>
      <input type="text" id="fname" name="fname" />

      <input type="submit" value="Send" />
    </>
  );
}
