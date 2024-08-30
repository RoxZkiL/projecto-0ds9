

const MiembroDelEquipo = ({ nombre, rol, iniciales }) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#ccc',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: '#fff',
          marginBottom: '10px',
        }}
      >
        {iniciales}
      </div>
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </div>
  );
};

export default MiembroDelEquipo;
