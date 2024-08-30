
import TeamMember from './TeamMember';

// Importa las imágenes locales
import paulaImage from '../../assets/AboutUs/MeetTheTeam/avatar-1.png';
import jesusImage from '../../assets/AboutUs/MeetTheTeam/avatar-2.png';
import felipeImage from '../../assets/AboutUs/MeetTheTeam/avatar-4.png';
import paulinaImage from '../../assets/AboutUs/MeetTheTeam/avatar-3.png';

const equipo = [
  { 
    nombre: 'Paula Llantén', 
    rol: 'Desarrollador Frontend / UX UI', 
    imagen: paulaImage, // Usando la imagen importada
    github: 'https://github.com/Paulallntn', 
    linkedin: 'https://www.linkedin.com/in/paula-llanten/',
    download: 'https://drive.google.com/file/d/1sr_xz2UkzTvb4uc9_lHMlti6xFRVHc1p/view?usp=sharing'
  },
  { 
    nombre: 'Jesús Matute', 
    rol: 'Desarrollador FullStack', 
    imagen: jesusImage, // Usando la imagen importada
    github: 'https://github.com/roxzkil', 
    linkedin: 'https://www.linkedin.com/in/jesusmatute/',
    download: 'https://drive.google.com/file/d/1tj8kddB0Wtrr4GAz2CuZ80rLuBrpIO8z/view?usp=sharing'
  },
  { 
    nombre: 'Felipe Vera', 
    rol: 'Desarrollador Frontend / UX UI', 
    imagen: felipeImage, // Usando la imagen importada
    github: 'https://github.com/felipe-vera', 
    linkedin: 'https://www.linkedin.com/in/felipe-vera-cardenas-188a17310/',
    download: 'https://drive.google.com/file/d/16d2JYbRgdKnDQFmMSTSsKx7C3-bUrI4I/view?usp=sharing'
  },
  { 
    nombre: 'Paulina Lipian', 
    rol: 'Desarrollador Frontend', 
    imagen: paulinaImage, // Usando la imagen importada
    github: 'https://github.com/sewyclub', 
    linkedin: 'https://www.linkedin.com/in/paulina-lipian-a55617318/',
    download: 'https://drive.google.com/file/d/1_i1r-_mEEotZkiNqzPHX8q_0EHqzmEgp/view?usp=sharing'
  },
];

const MeetTheTeam = () => {
  return (
    <section style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ color: 'rgb(71, 177, 127)', marginBottom:"50px"}}>Equipo de Trabajo</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {equipo.map((miembro) => (
          <TeamMember
            key={miembro.nombre}
            nombre={miembro.nombre}
            rol={miembro.rol}
            imagen={miembro.imagen}  // Cambiado para usar imágenes en lugar de iniciales
            github={miembro.github}
            linkedin={miembro.linkedin}
            download={miembro.download}
          />
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
