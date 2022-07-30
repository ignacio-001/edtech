import "./App.css";
import CostomTiffin from "./components/costom_tiffin/CostomTiffin";
import Inputform from "./components/inputform/Inputform";
function App() {
  const handleform=(topic,questions,classid,date)=>{
    
  }
  return (
    <>
    <Inputform handleform={handleform}/>
    </>
  );
}

export default App;
