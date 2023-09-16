import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn, MDBContainer, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

export default function ProductCard() {
    const items = useSelector((state) => state.cart.items);
    return (
        <div class="m-2">
            <MDBContainer>
                <MDBRow className='mb-3'>
                    {items.map((item) => (
                        <MDBCol key={item.id} size='md' >
                            <MDBCard>
                                <MDBCardImage src={item.img} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>
                                        {item.price}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Add To Cart</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    ))}
                </MDBRow>
            </MDBContainer>
        </div>
    );
}