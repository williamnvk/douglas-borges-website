"use client";

import { FC, useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const WordTransition: FC<{ words: string[]; inline?: boolean }> = ({
  words,
  inline = true,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.wobbly} inline={inline}>
      {words[index % words.length]}
    </TextTransition>
  );
};

export { WordTransition };
