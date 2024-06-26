import React from 'react';
import RoronoaZoro from '../../assets/images/zoro.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import withHits from './withHits';

const Zoro = ({ countHits, hits, life,countLoss }) => {

    const handleClick = () => {
        countHits();
        // countLoss("arlong");
    }
   
    return (
        <div className='d-flex flex-column' style={{ width: "200px" }}>
            <div className='text-center'>
                <img src={RoronoaZoro} style={{ height: "350px" }} alt="Roronoa Zoro" />
            </div>
            <button onClick={handleClick} className='btn btn-success'>Zoro attaque</button> {/* Utilisation de handleClick pour gérer le clic */}
            <div className='mt-2 d-flex justify-content-around'>
                <span className='badge text-bg-warning'>
                    <FontAwesomeIcon icon={faHandFist} /> {hits}
                </span>
                <span className='badge text-bg-success'>
                    <FontAwesomeIcon icon={faGratipay} />{life}%
                </span>
            </div>
        </div>
    );
};

export default withHits(Zoro);
