import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


export default function Restaurants(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const restaurants = useSelector((state:any) => state.restaurants.value);
    
    
    return(
        <div>
            <h1>I am in restaurant</h1>
            <h2>{restaurants[0].name}</h2>

        </div>
    )
}