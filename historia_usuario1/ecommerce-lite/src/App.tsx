import React from "react";
import { destinations, users } from "./data/data";
import ProductList from "./components/ProductList";
import UserCard from "./components/UserCard";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Viajes Lite ✈️</h1>
        <span className="header-subtitle">{destinations.length} destinos disponibles</span>
      </header>

      <main className="app-main">
        <section className="section">
          <h2 className="section-title">Destinos</h2>
          <ProductList destinations={destinations} />
        </section>

        <section className="section">
          <h2 className="section-title">Viajeros & Agentes</h2>
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
