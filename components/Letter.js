const randomPos = () =>
  Math.floor(Math.random() * Math.floor(800)) -
  Math.floor(Math.random() * Math.floor(800));
const Letter = ({ letter }) => (
  <>
    <style jsx>{`
      .letter {
        width: 100px;
        height: 100px;
        border: 0;
        border-radius: 50%;
        font-size: 64px;
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
    <div
      className="letter"
      style={{ marginTop: randomPos(), marginLeft: randomPos() }}
    >
      {letter}
    </div>
  </>
);

export default Letter;
