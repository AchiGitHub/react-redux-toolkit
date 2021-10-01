import React from "react";

function HistoryCard({ data, remove }) {
  return (
    <ul id="list" className="list">
      {data.map((item, idx) => {
        return (
          <li key={idx} className={item.amount > 0 ? "plus" : "minus"}>
            {item.text}{" "}
            <span>
              {item.amount > 0
                ? `+$${item.amount.toFixed(2)}`
                : `-$${item.amount.toFixed(2) * -1}`}
            </span>
            <button className="delete-btn" onClick={() => remove(idx)}>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default HistoryCard;
