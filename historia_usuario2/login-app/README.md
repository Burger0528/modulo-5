# Login App

Proyecto React + TypeScript con login modular, CRUD y decoradores.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Estructura

```
login-app/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── components/
    │   ├── Login.tsx
    │   └── Home.tsx
    ├── interfaces/
    │   └── User.ts
    ├── utils/
    │   ├── auth.ts
    │   ├── UserStore.ts
    │   └── decorators.ts
    └── data/
        └── users.ts
```

## Pruebas

- **Login:** usa `ana@mail.com / 1234` para ingresar.
- **CRUD y decorador:** abre la consola del navegador, veras los logs HTTP y el usuario creado con `role` y `createdAt`.
