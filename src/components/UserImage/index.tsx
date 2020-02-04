import React, { FunctionComponent } from 'react'
import { Image } from './UserImage.css'

interface IUserImageProps {
    src: string
}

const UserImage: FunctionComponent<IUserImageProps> = ({ src }) => (
    <Image src={src} />
)

export default UserImage