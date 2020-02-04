import React, { FunctionComponent, useState } from 'react';
import { debounce } from 'debounce'
import SearchBox from '../components/SearchBox';
import Users from '../components/Users';
import { IUser } from '../models/User'
import GithubService from '../utils/GithubService'

const DEBOUNCE_TIME = 1000

const Home: FunctionComponent = () => {

    const getUsers = debounce(async (searchTerm: string) => {
        const users = await GithubService.getUsers(searchTerm)
        setUsers(users)
    }, DEBOUNCE_TIME)

    const [users, setUsers] = useState<IUser[] | null>([])
    return (
        <>
            <SearchBox onSearch={(searchTerm: string) => getUsers(searchTerm)}/>
            <Users users={users}/>
        </>
    );
};

export default Home;
