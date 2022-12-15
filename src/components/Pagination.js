import React from "react";
import '../estilos/pagination.css'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }

    return(

        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {prev ? (
                    <li className="page-item">
                        <button className="button" onClick={handlePrevious}>Anterior</button>
                    </li>
                ) : null}
    
                {next ? (
                    <li className="page-item">
                        <button className="button" onClick={handleNext}>Siguiente</button>
                    </li>
                ) : null}
            </ul>
        </nav>
        )
}

export default Pagination