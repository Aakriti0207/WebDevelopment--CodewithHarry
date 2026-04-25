import Hello from "./components/helloWorld"
import CounterProgram from "./components/counterConsole";
import CounterProps from "./components/counterProps";
import TeacherList from "./components/mapRender";
import FavTeacher from "./components/forEachRender";
import Form from "./components/formSample";
import BrandNames from "./components/ex1-brandFilter";

function App() {
  return (
    <>
      <Hello />
      <CounterProgram />
      <CounterProps />
      <TeacherList />
      <FavTeacher />
      <Form />
      <BrandNames />
    </>
  );
}

export default App