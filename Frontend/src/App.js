import  Axios  from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/api/items')
  .then(function (response) {
    console.log(response.status);
  });
  }, []);




  return (
    <div >
      <h2> helll o MFS</h2>
    </div>
  );
}

export default App;
