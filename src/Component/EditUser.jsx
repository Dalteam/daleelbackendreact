import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

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
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
   
    const { staffname, maintainencenumber, staffsection, roomnumber,map} = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">تعديل السجل</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">الاسم</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='staffname' value={staffname} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">رقم الصيانة</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='maintainencenumber' value={maintainencenumber} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">القسم</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='staffsection' value={staffsection} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">اللوحة الارشادية</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='roomnumber' value={roomnumber} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">الخريطة التوضيحية</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='map' value={map} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>حفظ التغييرات</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;