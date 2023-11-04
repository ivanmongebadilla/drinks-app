import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from "reactstrap";
import { useState } from 'react';

const CardComponent = ({ data }) => {
    const [modal, setModal] = useState(false)

    const ingredients = [];
    const measures = [];

    for (let i = 1; i<16; i++) {
        ingredients.push(data.drinks[0]["strIngredient" + i.toString()])
        measures.push(data.drinks[0]["strMeasure" + i.toString()])
    }

    const btnHandler = () => {
        setModal(!modal)
    }

    return (
        <div className="favoritecard__container">
            <div className="favoritecard__img">
                <img src={data.drinks[0].strDrinkThumb} alt="Cocktail" width="95%"/>
            </div>
            <div className="favoritecard__info">
                <h3>{data.drinks[0].strDrink}</h3>
                <p className="favoritecard__description">{data.drinks[0].strTags}</p>
            </div>
            <button className="favoritecard__btn" onClick={btnHandler}>More Info</button>
            <Modal isOpen={modal} toggle={btnHandler} modalTransition={{ timeout: 300 }}>
                <ModalHeader toggle={btnHandler}>
                    <h2>
                        {data.drinks[0].strDrink}
                    </h2>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <h3>Ingredients:</h3>
                        <ul>
                            {ingredients.map((item, index) => item===null ? undefined : <li key={index}>{measures[index]} {item}</li>)}
                        </ul>
                        <h3>Instructions:</h3>
                        <p>{data.drinks[0].strInstructions}</p>
                        <h3>Glass:</h3>
                        <p>{data.drinks[0].strGlass}</p>
                    </div>
                    <div>
                        <img src={data.drinks[0].strDrinkThumb} alt="Cocktail" width="95%"/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={btnHandler}>Exit</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CardComponent;