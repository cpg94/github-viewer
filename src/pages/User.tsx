import React, { FunctionComponent, useEffect, useState } from 'react'
import GithubService from '../utils/GithubService'
import { IRepo } from '../models/Repo' 
import { withRouter } from 'react-router-dom'
import Activities from '../components/Activities'
import Repos from '../components/Repos'
import {
    Container
} from './User.css'
import Activity from '../classes/Activity'


interface IUserProps {
    match: {
        params: {
            id: string
        }
    }
}

const User: FunctionComponent<IUserProps> = ({ match }) => {
    const id = match.params.id
    const [userRepos, setRepos] = useState<IRepo[]>([])
    const [userActivities, setActivity] = useState<Activity[]>([])
    const [loadingData, setLoading] = useState<boolean>(true)

    useEffect(() => {
        async function getUserInfo(){
            setLoading(true)
            const repos = await GithubService.getUserRepos(id)
            const activities = await GithubService.getUserActivity(id)
            setLoading(false)
            setRepos(repos)
            setActivity(activities)
        }

        getUserInfo()
    }, [])
    return (
        <>
        <h2>User: {id}</h2>
        <Container>
            {loadingData && <div>Getting {id}'s info!</div>}
            {!loadingData && (
                <>
                    <Activities activities={userActivities}/>
                    <Repos repos={userRepos}/>
                </>
            )}
        </Container>
        </>
    )
}

export default withRouter(User)