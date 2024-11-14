"use client";

import { FC, useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const WordTransition: FC<{
  words: string[];
  inline?: boolean;
  delay?: number;
  typewriter?: boolean;
}> = ({ words, inline = true, delay = 3000, typewriter = false }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), delay);
    return () => clearTimeout(intervalId);
  }, [delay]);

  useEffect(() => {
    if (typewriter) {
      const word = words[index % words.length];
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= word.length) {
          setDisplayText(word.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust typing speed here
      return () => clearInterval(typingInterval);
    }
  }, [index, words, typewriter]);

  if (typewriter) {
    return (
      <span style={{ display: inline ? "inline-block" : "block" }}>
        {displayText}
      </span>
    );
  }

  return (
    <TextTransition springConfig={presets.wobbly} inline={inline}>
      {words[index % words.length]}
    </TextTransition>
  );
};

export { WordTransition };
