import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    staffname: '',
    maintainencenumber: '',
    staffsection: '',
    roomnumber:'',
    map: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { staffname, maintainencenumber, staffsection, roomnumber,map} = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">إضافة سجل جديد</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">الاسم</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='staffname' value={staffname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">رقم الصيانة</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='maintainencenumber' value={maintainencenumber} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">القسم</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='staffsection' value={staffsection} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">اللوحة الارشادية</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='roomnumber' value={roomnumber} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">الخريطة التوضيحية</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='map' value={map} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>إضافة</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;