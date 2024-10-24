import React, { useEffect, useState } from 'react';


const Autotyping = () => {
  const texts = [
    "Collaboration",
    "Communication",
    "Creativity",
  ]; // Array of texts to be auto-typed and deleted in a loop

  // Defining state variables
  const [displayText, setDisplayText] = useState(""); // Text currently displayed
  const [textIndex, setTextIndex] = useState(0); // Index to track which text is being typed
  const [isDeleting, setIsDeleting] = useState(false); // Flag to check if text is being deleted
  const [charIndex, setCharIndex] = useState(0); // Index of the character currently being typed or deleted
  
  const typingSpeed = 150; // Typing speed in milliseconds
  const deletingSpeed = 100; // Deleting speed in milliseconds
  const pauseDuration = 200; // Pause duration before starting a new word or deleting

  useEffect(() => {
    let timer; // Timer for the setTimeout

    if (isDeleting) {
      // If deleting is true, delete characters one by one
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, charIndex - 1)); // Remove one character from the displayed text
          setCharIndex(charIndex - 1); // Decrement character index
        }, deletingSpeed);
      } else {
        // Once all characters are deleted, switch to the next text
        timer = setTimeout(() => {
          setIsDeleting(false); // Stop deleting, start typing next text
          setTextIndex((textIndex + 1) % texts.length); // Move to the next text in the array (loop around)
          setCharIndex(0); // Reset character index for the new text
        }, pauseDuration);
      }
    } else {
      // Typing characters one by one
      if (charIndex < texts[textIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, charIndex + 1)); // Add one character to the displayed text
          setCharIndex(charIndex + 1); // Increment character index
        }, typingSpeed);
      } else {
        // Once the entire text is typed, start deleting after a pause
        timer = setTimeout(() => {
          setIsDeleting(true); // Set the flag to start deleting
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer); // Cleanup the timeout when the component is unmounted
  }, [isDeleting, charIndex, textIndex, texts]); // Dependency array to re-run effect when these values change

  return (
    <div component="span" style={{ display: "inline-block", whiteSpace: "nowrap",marginX:"6px", color: "#1E719B", fontWeight: "bold",  }}>
      {displayText} {/* Render the auto-typing text */}
    </div>
  );
};

export default Autotyping;
