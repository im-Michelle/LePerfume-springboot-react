import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { save } from '../services/api';
import Label from './label';

const Border = styled.div`
    height: 10vh;
`

const Container = styled.div`
    display: flex;
    justify-content:center;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  width: 550px;
  border-radius: 20px;
`;


const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
`;

function MyForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        priceWithDiscount: '',
        imgMobile: '',
        imgDesktop: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.description || !formData.price || !formData.priceWithDiscount || !formData.imgMobile || !formData.imgDesktop) {
            console.log('No Data');
            return;
        }

        try {
            const response = await save(formData);
            console.log(response);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Border />
            <Container>
            <FormContainer onSubmit={handleSubmit}>
                <Label text="Name" name="name" value={formData.name} onChange={handleChange} required />
                <Label text="Description" name="description" value={formData.description} onChange={handleChange} required />
                <Label text="Price" name="price" value={formData.price} onChange={handleChange} required />
                <Label text="Price with Discount" name="priceWithDiscount" value={formData.priceWithDiscount} onChange={handleChange} required />
                <Label text="Mobile Image URL" name="imgMobile" value={formData.imgMobile} onChange={handleChange} required />
                <Label text="Desktop Image URL" name="imgDesktop" value={formData.imgDesktop} onChange={handleChange} required />
                <Button type="submit" >Save</Button>
            </FormContainer>
            </Container>
        </>
    );
}

export default MyForm;
