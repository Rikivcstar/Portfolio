import { useRef, useEffect, useState } from "react";

const Squares = ({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className = "",
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const [hoveredSquare, setHoveredSquare] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = direction === "right" || direction === "diagonal" ? -offset : 0;
      const startY = direction === "down" || direction === "diagonal" ? -offset : 0;

      for (let x = 0; x < numSquaresX.current; x++) {
        for (let y = 0; y < numSquaresY.current; y++) {
          const squareX = startX + x * squareSize;
          const squareY = startY + y * squareSize;

          if (
            hoveredSquare &&
            Math.floor((hoveredSquare.x - startX) / squareSize) === x &&
            Math.floor((hoveredSquare.y - startY) / squareSize) === y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      offset += speed;
      if (offset >= squareSize) offset = 0;

      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, [direction, speed, borderColor, squareSize, hoverFillColor, hoveredSquare]);

  const handleMouseMove = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setHoveredSquare({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full h-full border-none block ${className}`}
    />
  );
};

export default Squares;
