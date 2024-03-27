import React from "react";

interface ISquareProps {
  onClick: () => void;
  value: "X" | "O" | null;
  winner : string | null;
}
const Square: React.FC<ISquareProps> = ({ onClick, value, winner }) => {
  if (!value) {
    return (
      <button className="borad-btn" onClick={onClick} disabled={Boolean(winner)}>
        {value}
      </button>
    );
  }

  return (
    <button  disabled className={`borad-btn square_${value}`}>
      {value}
    </button>
  );
};

export default Square;
