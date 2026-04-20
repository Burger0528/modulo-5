// Dashboard protegido — solo accesible con token válido
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Card from "@/components/Card";

export default async function DashboardPage() {
  const token = cookies().get("token")?.value;
  if (!token) redirect("/login");

  const payload = verifyToken(token);
  if (!payload) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, fullName: true, createdAt: true },
  });

  if (!user) redirect("/login");

  // Cantidad total de usuarios como dato para una card
  const totalUsers = await prisma.user.count();

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Hola, {user.fullName}</h1>
          <p>{user.email}</p>
        </div>
        <form action="/api/auth/logout" method="POST">
          <a href="/api/auth/logout" className="logout-btn">Salir</a>
        </form>
      </header>

      <section className="dashboard-grid">
        <Card title="Usuarios totales" value={totalUsers} accent="blue" description="Registrados en el sistema" />
        <Card title="Mi ID" value={user.id} accent="green" />
        <Card
          title="Miembro desde"
          value={new Date(user.createdAt).toLocaleDateString("es-CO")}
          accent="orange"
        />
        <Card title="Estado" value="Activo" accent="green" description="Cuenta verificada" />
      </section>
    </main>
  );
}
