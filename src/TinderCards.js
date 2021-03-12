import React, { useState } from 'react';
// import database from './firebase'; 
// Si quiero usar firestore
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
function TinderCards() {
    const [ people, setPeople ] = useState([
        {
            name: 'Cane Corso',
            url: 'https://www.timeforpaws.co.uk/img/cane-corso.jpg'
        },
        {
            name: 'Labrador',
            url: 'https://misanimales.com/wp-content/uploads/2015/09/labrador-retriever.jpg'
        },
        {
            name: 'Ovejero Alemán',
            url: 'https://www.hola.com/imagenes/estar-bien/20191004150785/pastor-aleman-raza-de-perro-caracteristicas/0-728-57/raza-de-perro-pastor-aleman-m.jpg'
        },
        {
            name: 'Perro callejero',
            url: 'https://www.happets.com/blog/wp-content/uploads/2020/02/Happets-alimentacio%CC%81n-perros-mestizos-pienso.png'
        }
    ]);
    // useEffect(() => {
    //    const unsuscribe = database
    //     .collection("people")
    //     .onSnapshot((snapshot) =>
    //        setPeople(snapshot.docs.map((doc) => doc.data()))
    //     );
    //     return () => {
//              unsuscribe()
    //      }    
    // }, []);
    
    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}        
            </div>
        </div>
    )
}

export default TinderCards
