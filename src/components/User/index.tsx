import React, { FunctionComponent } from 'react'
import { Container, Name, StyledLink } from './User.css'
import UserImage from '../UserImage'
import { IUser } from '../../models/User'

interface IUserProps {
    user: IUser
}
const SingleUser: FunctionComponent<IUserProps> = ({ user }) => (
        <StyledLink to={`/user/${user.login}`}>
        <Container>
            <UserImage src={user.avatar_url}/>
            <Name>
                {user.login}
            </Name>
        </Container>
        </StyledLink>
    )

export default SingleUser