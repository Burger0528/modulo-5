import { User } from "../interfaces/User";
import { users } from "../data/users";

// valida email y password contra el array mock
export function authenticate(email: string, password: string): User | null {
  const found = users.find(u => u.email === email && u.password === password);
  return found || null;
}
