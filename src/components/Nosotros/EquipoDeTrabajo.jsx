
import MiembroDelEquipo from './MiembroDelEquipo';

const equipo = [
  { nombre: 'Paula Llanten', rol: 'Desarrollador Backend', iniciales: 'PL' },
  { nombre: 'Jesus Matute', rol: 'Desarrollador Backend', iniciales: 'JM' },
  { nombre: 'Felipe Vera', rol: 'Desarrollador Frontend', iniciales: 'FV' },
  { nombre: 'Paulina Lipian', rol: 'Desarrollador Frontend', iniciales: 'PL' },
];

const EquipoDeTrabajo = () => {
  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Equipo de Trabajo</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {equipo.map((miembro) => (
          <MiembroDelEquipo
            key={miembro.nombre}
            nombre={miembro.nombre}
            rol={miembro.rol}
            iniciales={miembro.iniciales}
          />
        ))}
      </div>
    </section>
  );
};

export default EquipoDeTrabajo;