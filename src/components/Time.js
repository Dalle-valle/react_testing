import React from "react";

export default function Time(props) {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const closingTime = new Date(`${month} ${day}, ${year} 22:00:00`).getTime();
  const openingTime = new Date(`${month} ${day}, ${year} 8:00:00`).getTime();
  const currentTime = new Date().getTime();
  const timeLeft = closingTime - currentTime;
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const paddedMin = minutes.toString().padStart(2, "0");
  const paddedHr = hours.toString().padStart(2, "0");
  const paddedSec = seconds.toString().padStart(2, "0");

  return (
    <div className="closing-display">
      {closingTime > currentTime && currentTime > openingTime ? (
        <p>
          Closing in:
          <span className="time">
            {paddedHr}:{paddedMin}:{paddedSec}
          </span>
        </p>
      ) : (
        <h2>Closed</h2>
      )}
    </div>
  );
}
