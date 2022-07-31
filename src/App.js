import DataList from "./dataList";
import StudentForm from "./form";

function App() {

  return (
    <>
      <div class="container" id="root">
        <div className="container-fluid">
          <h1>Student Data Display</h1>
        </div>
        <StudentForm />
        <div style={{"display": "flex"}}>
          <DataList />
        </div>
        
      </div>
    </>
  );
}
export default App;
