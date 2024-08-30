import React, { useState, useEffect } from 'react';
import './styles/CreateNewsForm.css';

const CreateNewsForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    setUser(loggedInUser);
  }, []);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const image = e.target.image.value;
    const summary = e.target.summary.value;
    const detailedInfo = e.target.detailedInfo.value;

    const response = await fetch('/api/news/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify({ title, image, summary, detailedInfo }),
    });

    if (response.ok) {
      alert('Noticia creada con éxito');
      setShowForm(false);
    } else {
      alert('Error al crear la noticia');
    }
  };

  if (!user || !user.is_admin) {
    return null;
  }

  return (
    <div>
      <button onClick={handleButtonClick} className="form-button">
        {showForm ? 'Cancelar' : 'Crear Nueva Noticia'}
      </button>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleButtonClick}>&times;</span>
            <form onSubmit={handleSubmit} className="news-form">
              <div className="form-group">
                <label htmlFor="title">Título:</label>
                <input type="text" id="title" name="title" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="image">Imagen (URL):</label>
                <input type="text" id="image" name="image" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="summary">Resumen:</label>
                <textarea id="summary" name="summary" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="detailedInfo">Información Detallada:</label>
                <textarea id="detailedInfo" name="detailedInfo" className="form-input" required />
              </div>
              <div className="form-button-container">
              <button className="form-button bottoncreate" type="submit">Crear Nueva Noticia</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewsForm;