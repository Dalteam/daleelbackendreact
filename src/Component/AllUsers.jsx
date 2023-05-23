import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    
                    <TableCell>الاسم</TableCell>
                    <TableCell>رقم الصيانة</TableCell>
                    <TableCell>القسم</TableCell>
                    <TableCell>اللوحة الإرشادية</TableCell>
                    <TableCell>الخريطة التوضيحية</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        
                        <TableCell>{user.staffname}</TableCell>
                        <TableCell>{user.maintainencenumber}</TableCell>
                        <TableCell>{user.staffsection}</TableCell>
                        <TableCell>{user.roomnumber}</TableCell>
                        <TableCell>{user.map}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>تعديل</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>حذف</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}
//<TableCell>Id</TableCell>
//<TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
export default AllUsers;