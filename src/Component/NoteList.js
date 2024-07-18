import React, { useState, useContext } from "react";
import { NoteContext } from "../Context/NoteContext";

const NoteList = () => {
  const { noteItems, removeFromNote, editNote, addToNote, clearNote } =
    useContext(NoteContext);
  const [editId, setEditId] = useState(null);
  const [newName, setNewName] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newNoteName, setNewNoteName] = useState("");

  const handleEdit = (note) => {
    setEditId(note.id);
    setNewName(note.name);
  };

  const handleSaveEdit = () => {
    editNote(editId, newName);
    setEditId(null);
    setNewName("");
  };

  const handleAddNote = () => {
    const newNote = {
      id: noteItems.length + 1,
      name: newNoteName,
    };
    addToNote(newNote);
    setNewNoteName("");
    setIsAdding(false);
  };

  return (
    <div>
      <h1>Note App</h1>
      {noteItems.map((note) => (
        <div key={note.id} className="note-container">
          {editId === note.id ? (
            <div>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleSaveEdit}>Send</button>
            </div>
          ) : (
            <p>
              {note.name}
              <span className="note-actions">
                <button onClick={() => removeFromNote(note.id)}>Remove</button>
                <button onClick={() => handleEdit(note)}>Edit</button>
              </span>
            </p>
          )}
        </div>
      ))}
      {isAdding ? (
        <div>
          <input
            type="text"
            value={newNoteName}
            onChange={(e) => setNewNoteName(e.target.value)}
          />
          <button onClick={handleAddNote}>Save</button>
        </div>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add Note</button>
      )}
      <button onClick={clearNote}>Clear All</button>
    </div>
  );
};

export default NoteList;
