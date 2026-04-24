import Hello from "./components/helloWorld"
import CounterProgram from "./components/counterConsole";
import CounterProps from "./components/counterProps";
import TeacherList from "./components/mapRender";
import FavTeacher from "./components/forEachRender";

function App() {
  return (
    <>
      <Hello />
      <CounterProgram />
      <CounterProps />
      <TeacherList />
      <FavTeacher />
    </>
  );
}

export default App