import { User } from "../interfaces/User";
import { users } from "../data/users";
import { extendUser } from "./decorators";

export class UserStore {
  private data: User[] = users;

  // GET - lista todos los usuarios
  list(): User[] {
    console.log("[HTTP GET] /users");
    return this.data;
  }

  // GET - busca por nombre
  findByName(name: string): User | undefined {
    console.log(`[HTTP GET] /users?name=${name}`);
    return this.data.find(u => u.name === name);
  }

  // POST - crea un usuario nuevo
  @extendUser
  create(user: User): User {
    console.log("[HTTP POST] /users");
    this.data.push(user);
    return user;
  }

  // PATCH - actualiza campos de un usuario
  update(id: number, changes: Partial<User>): User | null {
    console.log(`[HTTP PATCH] /users/${id}`);
    const index = this.data.findIndex(u => u.id === id);
    if (index === -1) return null;
    this.data[index] = { ...this.data[index], ...changes };
    return this.data[index];
  }

  // DELETE - elimina por id
  remove(id: number): boolean {
    console.log(`[HTTP DELETE] /users/${id}`);
    const index = this.data.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    return true;
  }
}
