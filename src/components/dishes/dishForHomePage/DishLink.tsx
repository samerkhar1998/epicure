import React from 'react'
import vector from '../../../data/images/Vector.svg';
import {Link, MyText, VectorContainer} from '../../sharedStyles';

function DishLink() {
  return (
    <Link >
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

export default DishLink