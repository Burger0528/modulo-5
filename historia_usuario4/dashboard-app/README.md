# Dashboard App

Next.js 14 (App Router) + TypeScript + Prisma + PostgreSQL.
Registro, login con JWT en cookie httpOnly y dashboard protegido con cards.

## Estructura

```
src/
  app/
    layout.tsx
    page.tsx              // redirige a /login
    register/page.tsx
    login/page.tsx
    dashboard/page.tsx    // protegido
    globals.css
    api/
      auth/
        register/route.ts
        login/route.ts
        logout/route.ts
      me/route.ts
  components/
    Card.tsx
  lib/
    prisma.ts             // cliente Prisma apuntando a Postgres
    auth.ts               // sign/verify JWT
prisma/
  schema.prisma           // modelo User
```

## Requisitos previos

- Node.js 18+
- PostgreSQL corriendo localmente (puerto 5432 por defecto)

## Instalación

```bash
npm install
```

## Configurar base de datos

1. Copia el archivo de entorno:
   ```bash
   cp .env.example .env
   ```

2. Edita `.env` con tu conexión a Postgres:
   ```
   DATABASE_URL="postgresql://USUARIO:CLAVE@localhost:5432/dashboard_db?schema=public"
   JWT_SECRET="pon-aqui-un-secreto-largo"
   ```

3. Genera el cliente y aplica el esquema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Ejecutar

```bash
npm run dev
```

Abrir http://localhost:3000 — redirige a `/login`.

## Flujo

1. `/register` — crea cuenta, setea cookie con JWT, redirige a dashboard.
2. `/login` — autentica, setea cookie, redirige a dashboard.
3. `/dashboard` — lee cookie, valida JWT, muestra cards con datos del usuario.
4. `/api/auth/logout` — borra cookie y vuelve a login.

## Endpoints API

| Método | Ruta                  | Descripción                    |
|--------|-----------------------|--------------------------------|
| POST   | /api/auth/register    | Crear cuenta                   |
| POST   | /api/auth/login       | Iniciar sesión                 |
| GET    | /api/auth/logout      | Cerrar sesión                  |
| GET    | /api/me               | Datos del usuario autenticado  |
