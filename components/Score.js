const Score = ({ score, streak }) => {
  return (
    <>
      <style jsx>{`
        .wrapper {
          position: absolute;
          right: 100px;
          top: 100px;
        }
        .score {
          transition: top 0.2s;
          color: #fff;
          width: 100px;
          height: 100px;
          border: 0;
          border-radius: 24px;
          font-size: 64px;
          cursor: pointer;
          margin-left: auto;
          text-shadow: 8px 8px 8px #000;
        }
        .streak {
          color: hotpink;
          font-size: 18px;
        }
        .multiplier {
          color: red;
          font-size: 48px;
        }
      `}</style>
      <div className="wrapper">
        <div className="score" style={{ color: score < 0 ? "red" : "#fff" }}>
          {score}
        </div>
        {streak > 4 && <div className="streak">{streak} STREAK!</div>}
        {streak > 4 && streak < 10 && <div className="multiplier">x2</div>}
        {streak > 9 && streak < 20 && <div className="multiplier">x4</div>}
        {streak > 19 && <div className="multiplier">x8</div>}
      </div>
    </>
  );
};

export default Score;
