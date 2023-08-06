import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { textActions } from "../store/text-slice";
import { pronouns } from "./data/pronouns";

const TextBox = () => {
  const dispatch = useDispatch();
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.focus();
  }, []);
  const handleChange = () => {
    const text = textRef.current.value;
    const words = text.split(/[" " \n]/);
    const characters = text.length;
    const sentences = text.split(/[.?!]/);
    const paragraphCandidates = text.split("\n");
    const paragraphs = paragraphCandidates.filter(
      (paragraph) => paragraph.length !== 0
    );

    let pronounCount = 0;
    let longestWord = words[0];

    const avarageReadingTime = Math.round(words.length / 200);

    for (let word of words) {
      if (longestWord.length < word.length) {
        longestWord = word;
      }
      for (let pronoun of pronouns) {
        if (word === pronoun) {
          pronounCount++;
        }
      }
    }

    // console.log(words.length);
    dispatch(
      textActions.setState({
        words: words.length,
        characters: characters,
        sentences: sentences.length,
        paragraphs: paragraphs.length,
        pronouns: pronounCount,
        longestWord: longestWord,
        avarageReadingTime: avarageReadingTime,
      })
    );

    if (text.length === 0) {
      dispatch(
        textActions.setState({
          words: 0,
          characters: 0,
          sentences: 0,
          paragraphs: 0,
          pronouns: 0,
          longestWord: 0,
        })
      );
    }
    // console.log(sentence.length);
  };

  return (
    <div>
      <textarea
        ref={textRef}
        id="message"
        rows="4"
        onChange={handleChange}
        class=" w-full h-[400px] text-xl p-4  bg-white  outline-none  "
        placeholder="paste something here..."
      ></textarea>
    </div>
  );
};

export default TextBox;
