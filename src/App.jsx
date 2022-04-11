import './App.css';

function App() {
  const MOS=["Android","Blackberry","iphone","Windows Phone"];
  const MM=["Samsung","HTC","Micromax","Apple"];
  
  return (
    <div className="App">
     <h2>Mobile Operating system</h2>
     <ul>
       {
         MOS.map((el,i)=>{
          return <li key={i} >{el}</li>
         })
       }
     </ul>

     <h2>Mobile Manufacturers</h2>
     <ul>
       {
         MM.map((el,i)=>{
          return <li key={i} >{el}</li>
         })
       }
     </ul>

    </div>
  );
}

export default App;
