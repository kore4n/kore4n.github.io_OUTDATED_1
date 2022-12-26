import Blast from "./blast";

export default function BlastWord(props) {
    const blastLetters = props.word.split('').map((letter) => (
        <Blast key={letter} letter={letter}/>
    ));

    return (
      <>
        {blastLetters}
      </>
    );
  }