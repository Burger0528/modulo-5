# Destinos del Mundo — Componentes UI

Componentes reutilizables en React + TypeScript: Button, Badge, Card.  
Temática: tarjetas de destinos de viaje.

## Estructura

```
src/
  components/
    Button.tsx
    Badge.tsx
    Card.tsx
  App.tsx
  App.css
```

## Ejecución

```bash
npm install
npm start
```

## Uso de los componentes

### Button

```tsx
<Button
  text="Reservar vuelo"
  variant="primary"   // "primary" | "secondary" | "danger"  (default: "primary")
  size="md"           // "sm" | "md" | "lg"                  (default: "md")
  disabled={false}
  loading={false}
  leftIcon={<span>✈</span>}
  onClick={() => {}}
/>
```

### Badge

```tsx
<Badge
  label="Tendencia"
  status="info"       // "success" | "warning" | "info" | "error" | "neutral"  (default: "neutral")
  icon={<span>🔥</span>}
/>
```

### Card

```tsx
<Card
  title="París, Francia"
  type="white"        // "green" | "white" | "black"
  imageUrl="https://..."
  badgeLabel="Tendencia"
  badgeStatus="info"
  footer={<Button text="Reservar vuelo" />}
>
  La ciudad del amor.
</Card>
```

