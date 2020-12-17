import React from "react";

export default function DashComp(props) {
    const [isPlus, setPlus] = useState("+");

    const handlePlusOne = () => {
        setPlus(!isPlus);
    };

  return (
          <h2 onClick={handlePlusOne}>
            {props.heading}
            <span className="plus-minus">{isPlus ? "+" : "-"}</span>
          </h2>
  );
}
