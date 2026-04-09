# Ecommerce Lite — Componentes UI

Componentes reutilizables en React + TypeScript: Button, Badge, Card.

## Estructura

```
src/
  components/
    Button.tsx
    Badge.tsx
    Card.tsx
  App.tsx
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
  text="Comprar"
  variant="primary"   // "primary" | "secondary" | "danger" (default primary)
  size="md"           // "sm" | "md" | "lg" (default md)
  disabled={false}
  loading={false}
  leftIcon={<span>→</span>}
  onClick={() => {}}
/>
```

### Badge

```tsx
<Badge
  label="En stock"
  status="success"    // "success" | "warning" | "info" | "error" | "neutral"
  icon={<span>✓</span>}
/>
```

### Card

```tsx
<Card
  title="MacBook Pro"
  type="white"        // "green" | "white" | "black"
  imageUrl="..."
  badgeLabel="Nuevo"
  badgeStatus="info"
  footer={<Button text="Comprar" />}
>
  Descripción del producto
</Card>
```

## Criterios cubiertos

| CA    | Descripción                              |
|-------|------------------------------------------|
| CA_01 | Button.variant con default primary       |
| CA_02 | Button.size con default md               |
| CA_03 | Props opcionales del Button              |
| CA_04 | Button.text obligatorio                  |
| CA_05 | Button integrado en footer de Card       |
| CA_06 | Badge.label obligatorio                  |
| CA_07 | Badge.status con default neutral         |
| CA_08 | Badge.icon opcional                      |
| CA_09 | Cada Card incluye al menos un Badge      |
| CA_10 | Card.title y Card.type obligatorios      |
| CA_11 | Card.imageUrl opcional                   |
| CA_12 | Card.footer opcional                     |
| CA_13 | Badge integrado en el diseño de Card     |
