import { useState, useEffect } from "react";
import Letter from "./Letter";
import Input from "./Input";
import Score from "./Score";

const getRandomLetter = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 1)
    .toUpperCase();

const getSpeed = () => 1000 + Math.floor(Math.random() * Math.floor(3000));

const PageWrapper = () => {
  const [letter, setLetter] = useState(getRandomLetter());
  const [streak, setStreak] = useState(0);
  const [input, setInput] = useState(null);
  const [score, setScore] = useState(0);
  const [letterInterval, setLetterInterval] = useState(null);
  const [speed, setSpeed] = useState(getSpeed());
  const [repeat, setRepeat] = useState(0);

  const initLetterInterval = (clear = true) => {
    setSpeed(getSpeed());
    setLetterInterval(
      setInterval(() => {
        console.log(speed);
        console.log(repeat);
        if (clear) {
          setLetter(null);
        }
        setRepeat(repeat + 1);
        console.log("update");
        setTimeout(() => {
          setLetter(getRandomLetter());
        }, 500);
      }, speed)
    );
  };

  useEffect(() => {
    initLetterInterval();

    return () => {
      clearInterval(letterInterval);
    };
  }, []);
  useEffect(() => {
    if (input && input === letter) {
      const baseScore = Math.ceil(4000 / speed);
      if (streak > 19) {
        setScore(score + baseScore * 8);
      } else if (streak > 9) {
        setScore(score + baseScore * 4);
      } else if (streak > 4) {
        setScore(score + baseScore * 2);
      } else {
        setScore(score + baseScore);
      }
      setStreak(streak + 1);
      setLetter(getRandomLetter());
      clearInterval(letterInterval);
      initLetterInterval(false);
    } else if (input && input !== letter) {
      if (score - 5 < 0) {
        setScore(0);
      } else {
        setScore(score - 5);
      }
      setStreak(0);
      clearInterval(letterInterval);
      initLetterInterval();
    }
    setLetter(null);
  }, [input]);
  return (
    <>
      <style jsx>{`
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 40px;
        width: 90vw;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 48px;
        font-family: arial;
        font-weight: 800;
        color: hotpink;
      `}</style>
      <div>
        {letter && <Letter letter={letter} score={score} setScore={setScore} />}
        <Score score={score} streak={streak} />
        <Input input={input} correct={streak > 0} setInput={setInput} />
      </div>
    </>
  );
};
export default PageWrapper;
