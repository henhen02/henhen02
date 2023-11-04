import { useState, useEffect } from "react";

const Header = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Students", "Frontend Enthusiast"];
  const typingDelay = 150;

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? typingDelay : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), typingDelay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, loopNum, textArray, typingDelay]);

  return (
    <header className="h-screen flex flex-col items-center justify-center bg-[#213555]">
      <h1 className="text-[#D8C4B6] text-6xl text-center">
        Hendri Aldi Zulfan
      </h1>
      <p className="text-[#D8C4B6] text-2xl">{`${text}|`}</p>
    </header>
  );
};

export default Header;
