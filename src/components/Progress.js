import React from "react";

export default function Progress({
  index,
  numberOfQuestion,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numberOfQuestion}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index}</strong> / {numberOfQuestion}
      </p>

      <p>
        <strong>
          {points} / {maxPossiblePoints}{" "}
        </strong>
      </p>
    </header>
  );
}
