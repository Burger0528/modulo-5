// RF_04: Listado de Cards con ejemplos prácticos
import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

interface Item {
  id: string;
  title: string;
  type: "green" | "white" | "black";
  imageUrl: string;
  description: string;
  badgeLabel: string;
  badgeStatus: "success" | "warning" | "info" | "error" | "neutral";
  actionText: string;
  variant: "primary" | "secondary" | "danger";
}

const items: Item[] = [
  {
    id: "1",
    title: "MacBook Pro 14",
    type: "white",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    description: "Chip M3 Pro, 18GB RAM, 512GB SSD",
    badgeLabel: "En stock",
    badgeStatus: "success",
    actionText: "Comprar",
    variant: "primary",
  },
  {
    id: "2",
    title: "Sony WH-1000XM5",
    type: "black",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Auriculares con cancelación de ruido",
    badgeLabel: "Nuevo",
    badgeStatus: "info",
    actionText: "Ver detalles",
    variant: "secondary",
  },
  {
    id: "3",
    title: "iPad Pro 12.9",
    type: "green",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    description: "Tablet profesional con M2",
    badgeLabel: "Pocas unidades",
    badgeStatus: "warning",
    actionText: "Reservar",
    variant: "primary",
  },
  {
    id: "4",
    title: "Kindle Paperwhite",
    type: "white",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "E-reader con luz cálida ajustable",
    badgeLabel: "Agotado",
    badgeStatus: "error",
    actionText: "No disponible",
    variant: "danger",
  },
];

const App: React.FC = () => {
  const handleAction = (title: string): void => {
    alert(`Acción ejecutada en: ${title}`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Componentes UI</h1>
        <span className="header-subtitle">Button · Badge · Card</span>
      </header>

      <main className="app-main">
        // Grid principal con el listado de cards
        <div className="cards-grid">
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              type={item.type}
              imageUrl={item.imageUrl}
              badgeLabel={item.badgeLabel}
              badgeStatus={item.badgeStatus}
              footer={
                // CA_05: Button integrado como acción principal
                <Button
                  text={item.actionText}
                  variant={item.variant}
                  size="md"
                  disabled={item.badgeStatus === "error"}
                  onClick={() => handleAction(item.title)}
                />
              }
            >
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
