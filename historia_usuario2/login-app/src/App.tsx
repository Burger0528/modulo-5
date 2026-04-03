import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { UserStore } from "./utils/UserStore";

// prueba rapida del CRUD y del decorador en consola
const store = new UserStore();
store.list();
store.findByName("Ana");
const nuevo = store.create({
  id: 4,
  name: "Pedro",
  email: "pedro@mail.com",
  password: "xyz",
});
console.log("Usuario creado con decorador:", nuevo);
store.update(1, { name: "Ana Maria" });
store.remove(2);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
