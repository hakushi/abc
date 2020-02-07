import { useState, useEffect } from "react";

const Input = ({ input, correct, setInput }) => {
  const [top, setTop] = useState("-100px");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    document.addEventListener("keypress", event =>
      setInput(event.key.toUpperCase())
    );
  }, []);

  useEffect(() => {
    setTimer(
      setTimeout(() => {
        setTop("-100px");
        setInput(null);
      }, 500)
    );
    setTop("100px");

    return () => {
      clearTimeout(timer);
      setTop("-100px");
    };
  }, [input]);

  if (!input) {
    return <></>;
  }

  return (
    <>
      <style jsx>{`
         {
          position: absolute;
          left: 100px;
          top: -100px;
          transition: top 0.2s;
          color: #48cccd;
          width: 60px;
          height: 60px;
          border: 0;
          border-radius: 14px;
          font-size: 36px;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.3);
          border: 1px solid #000;
          text-shadow: 8px 8px 8px #000;
          box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <div style={{ top: top, color: correct ? "green" : "red" }}>{input}</div>
    </>
  );
};

export default Input;
