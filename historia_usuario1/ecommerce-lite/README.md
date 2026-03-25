# Ecommerce Lite

Proyecto React con TypeScript — HU Sprint 1.

## Estructura

```
src/
  components/   # ProductCard, ProductList, UserCard
  interfaces/   # Product, User, Address, Dimensions
  data/         # data.ts — mock de 15 productos y 5 usuarios
```

## Instrucciones

```bash
// Instalar dependencias
npm install

// Iniciar en desarrollo
npm start

// Compilar para producción
npm run build
```

## Criterios cubiertos

| CA    | Descripción                                      | Estado |
|-------|--------------------------------------------------|--------|
| CA_01 | Proyecto React con TypeScript                    | ✅     |
| CA_02 | Compila y arranca                                | ✅     |
| CA_03 | Estructura /components /interfaces /data         | ✅     |
| CA_04 | Interface Product con atributos obligatorios     | ✅     |
| CA_05 | Interface User con atributos obligatorios        | ✅     |
| CA_06 | Propiedades opcionales en ambas interfaces       | ✅     |
| CA_07 | 15 productos y 5 usuarios en data.ts             | ✅     |
| CA_08 | Listado con .map()                               | ✅     |
| CA_09 | Nombre, precio, categoría e imagen renderizados  | ✅     |
| CA_10 | Props tipadas — ProductCardProps, UserCardProps  | ✅     |
