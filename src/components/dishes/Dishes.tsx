import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


export default function Dishes(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dishes = useSelector((state:any) => state.dishes.value);

    return(
        <p>Hello</p>
    )
};