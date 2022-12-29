import Blast from "./blast";

export default function BlastWord(props) {
    const blastLetters = props.word.split('').map((letter, index) => (
        <Blast key={index} letter={letter}/>
    ));

    return (
      <span>
        {blastLetters}
      </span>
    );
  }