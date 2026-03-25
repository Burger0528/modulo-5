import React from "react";
import { products, users } from "./data/data";
import ProductList from "./components/ProductList";
import UserCard from "./components/UserCard";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Ecommerce Lite</h1>
        <span className="header-subtitle">{products.length} productos disponibles</span>
      </header>

      <main className="app-main">
        // Sección principal de productos
        <section className="section">
          <h2 className="section-title">Productos</h2>
          <ProductList products={products} />
        </section>

        // Sección de usuarios del sistema
        <section className="section">
          <h2 className="section-title">Usuarios</h2>
          <div className="user-list">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
