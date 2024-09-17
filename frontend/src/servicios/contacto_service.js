import Contacto from '../modelos/contacto'; // Importa la clase Contacto

const API_BASE_URL = 'http://localhost:5000/api'; // Cambia esto a la URL de tu API

// Función para agregar un nuevo contacto
export const addContacto = async (contacto) => {
    try {
        // Crea una instancia de Contacto
        const nuevoContacto = new Contacto(contacto.nombre, contacto.telefono);

        const response = await fetch(`${API_BASE_URL}/postMethod`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoContacto),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error?.message || 'Error al agregar contacto');
        }

        return result.message;
    } catch (error) {
        throw new Error(error.message || 'Error en la petición');
    }
};

// Función para obtener todos los contactos
export const getContactos = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/getMethod`);

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error?.message || 'Error al obtener contactos');
        }

        return result.contactos;
    } catch (error) {
        throw new Error(error.message || 'Error en la petición');
    }
};

// Función para buscar un contacto por nombre
export const getContactoByName = async (nombre) => {
    try {
        const response = await fetch(`${API_BASE_URL}/getContact/${encodeURIComponent(nombre)}`);

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error?.message || 'Error al buscar contacto');
        }

        return result.contacto;
    } catch (error) {
        throw new Error(error.message || 'Error en la petición');
    }
};
