import Hello from "./components/helloWorld"
import CounterProgram from "./components/counterConsole";
import CounterProps from "./components/counterProps";
import TeacherList from "./components/mapRender";

function App() {
  return (
    <>
      <Hello />
      <CounterProgram />
      <CounterProps />
      <TeacherList />
    </>
  );
}

export default App