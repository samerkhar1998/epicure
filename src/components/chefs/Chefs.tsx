import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


export default function Chefs(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const chefs = useSelector((state:any) => state.chefs.value);

    return(
        <p>Hello</p>
    )
}