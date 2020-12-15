import React from "react";

export default function Queue(props) {
  const queueLength = props.data.queue.length;
  const servingLength = props.data.serving.length;

  return (
    <section className="queue-display">
      <p>Currently serving</p>
      <p className="bold">{servingLength}</p>
      <div className="serving-container">
        {props.data.serving.map((person) => {
          return (
            <figure>
              <img className="serving-rocket" src="serving-rocket.png" alt="serving rocket" />
              <figcaption>Nr. {person.id}</figcaption>
            </figure>
          );
        })}
      </div>
      <div className="queue-container">
        <p>Customers in line</p>
        <p className="bold">{queueLength}</p>

        <div className="rocket-container">
          {props.data.queue.map((person) => {
            return (
              <div>
                {/* <p>Nr. {person.id}</p> */}
                <img className="queue-rocket" src="queue-rocket.png" alt="queue rocket" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
