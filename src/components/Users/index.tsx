import React, { FunctionComponent } from 'react'
import User from '../User'
import NoUsers from '../NoUsers'
import { IUser } from '../../models/User'


interface IUsersProps {
    users: IUser[]
}

const Users: FunctionComponent<IUsersProps> = ({ users }) => {
    return users && users.length ? (
        <>
        {users.map((user) => <User key={user.login} user={user} />)}
        </>
    ) : <NoUsers />
}

export default Users