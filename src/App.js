import "./App.css";
import CostomTiffin from "./components/costom_tiffin/CostomTiffin";
import Coveredtopic from "./components/coveredtopic/Coveredtopic";
import Inputform from "./components/inputform/Inputform";
function App() {
  const handleform=(topic,questions,classid,date)=>{
    console.log(classid);
  };
  return (
    <>
    <Coveredtopic/>
    <Inputform handleform={handleform}/>
    </>
  );
}

export default App;
