import logo from "./logo.svg";
import "./App.css";
import { NoteProvider } from "./Context/NoteContext";
import NoteList from "./Component/NoteList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NoteProvider>
        <div>
          <NoteList />
        </div>
      </NoteProvider>
    </div>
  );
}

export default App;
