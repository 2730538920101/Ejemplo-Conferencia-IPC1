const Contacto = require('../modelos/contacto');
const contactos = require('../estructuras/contactos');
// controllers/mainController.js
// Método para la ruta raíz ('/')
exports.hello = (req, res) => {
    try {
        // Simulación de un proceso que puede fallar
        // Por ejemplo: throw new Error('Algo salió mal');

        res.status(200).json({ message: 'Servidor saludable' });
    } catch (error) {
        // Manejo de errores
        console.error('Error en /:', error.message);

        // Enviar una respuesta de error con el código de estado adecuado
        res.status(500).json({
            error: {
                message: 'Error interno del servidor: '+error.message
               
            },
        });
    }
};

// Método para '/postMethod'
exports.postMethod = (req, res) => {
    try {
        const { nombre, telefono } = req.body;

        if (!nombre || !telefono) {
            throw new Error('Faltan datos en el cuerpo de la solicitud');
        }

        const nuevoContacto = new Contacto(nombre, telefono);
        contactos.push(nuevoContacto);

        res.status(201).json({ message: 'Contacto creado' });
    } catch (error) {
        console.error('Error en /postMethod:', error.message);
        if (error.message.includes('Faltan datos')) {
            res.status(400).json({
                error: {
                    message: 'Solicitud incorrecta: ' + error.message
                },
            });
        } else {
            res.status(500).json({
                error: {
                    message: 'Error interno del servidor: ' + error.message
                },
            });
        }
    }
};


// Método para '/getMethod'
exports.getMethod = (req, res) => {
    try {
        if (contactos.length === 0) {
            res.status(404).json({ message: 'No hay contactos en la lista' });
        } else {
            res.status(200).json({ contactos });
        }
    } catch (error) {
        console.error('Error en /getMethod:', error.message);
        res.status(500).json({
            error: {
                message: 'Error interno del servidor: ' + error.message
            },
        });
    }
};

// Método para '/contact/:nombre'
exports.getContactByName = (req, res) => {
    try {
        const { nombre } = req.params;

        if (!nombre) {
            throw new Error('Falta el parámetro nombre en la consulta');
        }

        const contacto = contactos.find(c => c.nombre === nombre);

        if (!contacto) {
            res.status(404).json({ message: 'Contacto no encontrado' });
        } else {
            res.status(200).json({ contacto });
        }
    } catch (error) {
        console.error('Error en /contact/:nombre:', error.message);
        if (error.message.includes('Falta el parámetro nombre')) {
            res.status(400).json({
                error: {
                    message: 'Solicitud incorrecta: ' + error.message
                },
            });
        } else {
            res.status(500).json({
                error: {
                    message: 'Error interno del servidor: ' + error.message
                },
            });
        }
    }
};
