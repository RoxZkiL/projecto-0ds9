import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import "./Style.css";

const TeamMember = ({ nombre, rol, imagen, github, linkedin, download }) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center', marginBottom: "70px" }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            padding: '5px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            border: '5px solid #47b17f',
          }}
        >
          <img
            src={imagen}
            alt={`${nombre}'s photo`}
            className="team-member-img"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '4px' }}>
          <a href={github} style={{ textDecoration: 'none', marginBottom: '10px' }}>
            <FaGithub className="icono" size={25} style={{ borderRadius: '50%', color: "#47b17f", padding: '1px', border: '3px solid #47b17f', margin: '4px' }} />
          </a>
          <a href={linkedin} style={{ textDecoration: 'none', marginBottom: '10px' }}>
            <FaLinkedin className="icono" size={25} style={{ borderRadius: '50%', color: "#47b17f", padding: '1px', border: '3px solid #47b17f', margin: '4px' }} />
          </a>
          <a href={download} style={{ textDecoration: 'none' }}>
            <FaFileDownload className="icono" size={25} style={{ borderRadius: '50%', color: "#47b17f", padding: '1px', border: '3px solid #47b17f', margin: '4px' }} />
          </a>
        </div>
      </div>

      <div>
        <h3 style={{ textDecoration: 'none' }}>{nombre}</h3>
        <p className="rol">
          {rol}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
