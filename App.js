import "./App.css"; // Importing the main CSS file for styling
import React from "react"; // Importing React library
// Importing various components used in the application
import HelloWorld from "./Components/C1HelloWorld";
import CountButton from "./Components/C2CountButton";
import RenderList from "./Components/C3RenderList";
import InputForm from "./Components/C4FormInput";
import Magic8BallApp from "./Components/Magic8BallApp";
import UniversalTranslator from "./Components/C6P";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Each div below represents a container for a specific component */}
        <div>
          <HelloWorld /> {/* Component for displaying "Hello, World!" */}
        </div>
        <div>
          <CountButton /> {/* Component with a button to increment a counter */}
        </div>
        <div>
          <RenderList /> {/* Component for rendering a dynamic list */}
        </div>
        <div>
          <InputForm /> {/* Form component with controlled input */}
        </div>
        <div>
          <Magic8BallApp /> {/* Magic 8 Ball app for random answers */}
        </div>
        <div>
          <UniversalTranslator />{" "}
          {/* Component for translating text to an alien language */}
        </div>
      </header>
    </div>
  );
}

export default App; // Exporting the App component for use in other parts of the app
