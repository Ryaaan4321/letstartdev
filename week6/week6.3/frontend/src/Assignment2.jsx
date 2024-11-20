import { useMemo, useState } from "react";

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];

// Generate sentences
const TotalLines = 1000;
const AllWords = [];
for (let i = 0; i < TotalLines; i++) {
  let sentence = "";
  for (let j = 0; j < 10; j++) { // 10 words per sentence
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  AllWords.push(sentence.trim());
}

export default function Assignment2() {
  const [filter, setfilter] = useState("");

  // Filter sentences
  const filterSentence = useMemo(() => {
    return AllWords.filter((x) => x.includes(filter));
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setfilter(e.target.value)}
      />
      {filterSentence.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </div>
  );
}
