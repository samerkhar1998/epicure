import React from 'react'
import { Link, MyText, VectorContainer } from '../../sharedStyles'
import vector from '../../../data/images/Vector.svg';
import {useNavigate} from 'react-router-dom';

function RestaurantsLink() {
  const navigate = useNavigate();
  return (
    <Link onClick={() => navigate('restaurants')}>
        <MyText >All Restaurants</MyText>
        <VectorContainer>
        <img src={vector} alt="vector" />
            {/* <Group>
                <VecImg></VecImg>
            </Group> */}
        </VectorContainer>
        
    </Link>
  )
}

export default RestaurantsLink