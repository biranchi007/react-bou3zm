import React from "react";
import TodoItem from "./TodoItem.js";
import ContactCard from "./ContactCard.js";

function App() {
  return (
    <div className="todo-list">
      <h1>ToDO Items here</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <h1>Contact Cards here</h1>
      <ContactCard name = "First Kitten" imgUrl="/>
      <ContactCard />
      <ContactCard />
    </div>
  );
}

export default App;
