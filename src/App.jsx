import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h2>Home</h2>}/>
      </Routes>
    </div>
  );
};

export default App;
