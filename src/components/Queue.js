import React from "react";

export default function Queue(props) {
  const queueLength = props.data.queue.length;

  return (
    <section className="queue-display">
      <p>Your number in line</p>
      <p class="bold">X</p>
      <p>Customers in line</p>
      <p class="bold">{queueLength}</p>
      {props.data.queue.map((person) => {
        return (
          <div>
            <img className="rocket" src="https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png" />
            <p>Nr. {person.id}</p>
          </div>
        );
      })}
    </section>
  );
}
