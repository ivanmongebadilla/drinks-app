import { useQuery } from "@tanstack/react-query";

import { fetchDrink } from "../util/http";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from "./CardComponent";

const Card = (props) => {

    const { data, isPending, isError } = useQuery({
        queryKey: ['cocktails', props.drinkId],
        queryFn: ({ signal }) => fetchDrink({signal, id: props.drinkId})
    })

    let content;

    if (isPending) {
        content = (
            <div className="favoritecard__container">
                <h3>Loading data...</h3>
            </div>
        )
    }

    if (isError) {
        content = (
            <div className="favoritecard__container">
                <h3>There has been an error fetching the data</h3>
            </div>
        );     
    }

    if (data) {
        content = (
            <CardComponent data={data}/>
        )
    }

    return (
        <>
            {content}
        </>
    )
}

export default Card;