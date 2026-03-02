import { useEffect } from "react";

function LetterItem({ letter }) {
  useEffect(() => {
    console.log("Mounted or id changed:", letter.id);
    return () => {
      console.log("Cleanup for id:", letter.id);
    };
  }, [letter.id]);

  return <div className="letter-card" 
  aria-label={`letter-${letter.id}`}>{letter.content}
  </div>;
}

export default LetterItem;