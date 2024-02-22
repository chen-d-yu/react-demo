import {Route, Routes} from "react-router";
import Home from "@/pages/Home";
import Book from "@/pages/Book";

function App() {
  return   (
      <div className={'app'}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Book />} />
          </Routes>
      </div>
  )
}

export default App;
