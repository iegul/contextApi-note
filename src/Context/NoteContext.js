import React, { createContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [noteItems, setNoteItems] = useState([{ id: 1, name: "Study React" }]);

  const addToNote = (item) => {
    setNoteItems((prevItems) => [...prevItems, item]);
  };

  const removeFromNote = (itemId) => {
    setNoteItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearNote = () => {
    setNoteItems([]);
  };

  const editNote = (itemId, newName) => {
    setNoteItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <NoteContext.Provider
      value={{ noteItems, addToNote, removeFromNote, clearNote, editNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};
