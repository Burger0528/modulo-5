// decorador que agrega role y createdAt al usuario retornado por create
export function extendUser(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = original.apply(this, args);
    // se enriquecen las propiedades sin tocar la logica base
    return { ...result, role: "user", createdAt: Date.now() };
  };

  return descriptor;
}
