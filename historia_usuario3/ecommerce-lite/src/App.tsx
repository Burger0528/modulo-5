// RF_04: Listado de Cards con ejemplos prácticos — tema: destinos de viaje
import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

interface Destination {
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

const destinations: Destination[] = [
  {
    id: "1",
    title: "París, Francia",
    type: "white",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
    description: "La ciudad del amor: Torre Eiffel, Louvre y gastronomía inigualable.",
    badgeLabel: "Tendencia",
    badgeStatus: "info",
    actionText: "Reservar vuelo",
    variant: "primary",
  },
  {
    id: "2",
    title: "Tokio, Japón",
    type: "black",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
    description: "Tradición y modernidad: templos milenarios y neones futuristas.",
    badgeLabel: "Exclusivo",
    badgeStatus: "success",
    actionText: "Ver paquete",
    variant: "secondary",
  },
  {
    id: "3",
    title: "Patagonia, Argentina",
    type: "green",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400",
    description: "Glaciares, montañas y paisajes salvajes al fin del mundo.",
    badgeLabel: "Aventura",
    badgeStatus: "warning",
    actionText: "Explorar ruta",
    variant: "primary",
  },
  {
    id: "4",
    title: "Santorini, Grecia",
    type: "white",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400",
    description: "Casas blancas, cúpulas azules y atardeceres únicos en el Egeo.",
    badgeLabel: "Agotado",
    badgeStatus: "error",
    actionText: "Lista de espera",
    variant: "danger",
  },
  {
    id: "5",
    title: "Kioto, Japón",
    type: "green",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400",
    description: "Geishas, jardines zen y miles de templos entre bambuales.",
    badgeLabel: "Disponible",
    badgeStatus: "success",
    actionText: "Ver itinerario",
    variant: "primary",
  },
  {
    id: "6",
    title: "Nueva York, EE.UU.",
    type: "black",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400",
    description: "La ciudad que nunca duerme: Broadway, Central Park y rascacielos.",
    badgeLabel: "Popular",
    badgeStatus: "neutral",
    actionText: "Planificar viaje",
    variant: "secondary",
  },
];

const App: React.FC = () => {
  const handleAction = (title: string): void => {
    alert(`¡Acción ejecutada para: ${title}!`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>✈ Destinos del Mundo</h1>
          <span className="header-subtitle">Descubre · Reserva · Viaja</span>
        </div>
      </header>

      <main className="app-main">
        {/* RF_04: Grid principal con el listado de cards */}
        <div className="cards-grid">
          {destinations.map((dest) => (
            <Card
              key={dest.id}
              title={dest.title}
              type={dest.type}
              imageUrl={dest.imageUrl}
              badgeLabel={dest.badgeLabel}
              badgeStatus={dest.badgeStatus}
              footer={
                /* CA_05: Button integrado como acción principal */
                <Button
                  text={dest.actionText}
                  variant={dest.variant}
                  size="md"
                  disabled={dest.badgeStatus === "error"}
                  onClick={() => handleAction(dest.title)}
                />
              }
            >
              <p>{dest.description}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
