
import './App.css';
import Button from './components/Button.js'
import { FcGoogle } from 'react-icons/fc'

function App() {
  return (
    <main> 
      <Button 
        // style={{color: "green"}} 
        // onClick={() => console.log("button clicked")} 
        // onDoubleClick={()=> console.log("double clicked")}
        size="lg"
        className="green"
        variant="danger"
      >
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  );
}

export default App;
