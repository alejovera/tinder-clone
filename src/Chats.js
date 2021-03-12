import React from 'react';
import Chat from './Chat';
function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Cane Corso"
                message="Hola! Todo bien?"
                timestamp="Hace 40 segundos"
                profilePic="https://www.timeforpaws.co.uk/img/cane-corso.jpg"
            />
            <Chat
                name="Labrador"
                message="Cómo estás?"
                timestamp="Hace 15 minutos"
                profilePic="https://misanimales.com/wp-content/uploads/2015/09/labrador-retriever.jpg"
            />
            <Chat
                name="Ovejero Alemán"
                message="Me presento. Yo soy un Ovejero Alemán"
                timestamp="Hace 3 horas"
                profilePic="https://www.hola.com/imagenes/estar-bien/20191004150785/pastor-aleman-raza-de-perro-caracteristicas/0-728-57/raza-de-perro-pastor-aleman-m.jpg"
            />
            <Chat
                name="Perro callejero"
                message="Hola! Cómo andas?"
                timestamp="Hace 1 día"
                profilePic="https://www.happets.com/blog/wp-content/uploads/2020/02/Happets-alimentacio%CC%81n-perros-mestizos-pienso.png"
            />
        </div>
    )
}

export default Chats
