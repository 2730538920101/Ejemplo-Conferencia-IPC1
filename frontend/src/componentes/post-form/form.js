import React, { useState } from 'react';
import { addContacto } from '../../servicios/contacto_service';
import './form.css';

// Componente para el formulario de registro de contacto
function PostComponent() {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await addContacto({ nombre, telefono });

            setMessage({ type: 'success', text: result });
            setNombre('');
            setTelefono('');
        } catch (err) {
            setMessage({ type: 'error', text: err.message || 'Error al enviar el formulario' });
        }
    };

    return (
        <div className="form-container">
            <h1>Registrar Contacto</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {message && <p className={message.type === 'error' ? 'error-message' : 'success-message'}>{message.text}</p>}
        </div>
    );
}

export default PostComponent;
