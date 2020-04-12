import React from "react";
import Flashcard from "./Flashcard";

function FlashcardList({ flashCards }) {
  return (
    <div className="card-grid">
      {flashCards.map((flashCard) => (
        <Flashcard flashCard={flashCard} key={flashCard.id} />
      ))}
    </div>
  );
}

export default FlashcardList;
