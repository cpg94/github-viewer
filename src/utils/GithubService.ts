import { IUser } from "../models/User"
import { IActivity } from "../models/Activity"
import { IRepo } from "../models/Repo"
import { 
    GITHUB_HOST, 
    GITHUB_API_KEY
 } from '../config'
import Activity from "../classes/Activity"
import ActivityFactory from "../classes/ActivityFactory"

class GithubService {
    fetch = async <T>(endpoint: string): Promise<T | null> => {
        try {
            const response = await fetch(`${GITHUB_HOST}/${endpoint}`, {
                headers: {
                    'Authorization': `token ${GITHUB_API_KEY}`
                }
            })

            if (response.status === 200) {
                const json = await response.json();
                return json
            }
            
            return null; 
        } catch (e) {
            throw e
        }
    }

    getUsers = async (searchTerm: string): Promise<IUser[] | null> => {
        if(searchTerm){
            const users = await this.fetch<{ items: IUser[] }>(`search/users?q=${searchTerm}`)
            if(users && users.items){
                return users.items
            }
        }
        return null
    }

    getUserRepos = async (name: string): Promise<IRepo[] | null> => {
        const repos = await this.fetch<IRepo[]>(`users/${name}/repos`)
        if(repos && repos.length){
            return repos
        }
        return null
    } 

    getUserActivity = async (name: string): Promise<Activity[] | null> => {
        const activities = await this.fetch<IActivity[]>(`users/${name}/events`)
        if(activities && activities.length){
            // remove any activities that havent been mapped yet
            return activities.reduce((acc, activity) =>{
                const newActivity = new ActivityFactory(activity).getActivity()
                if(newActivity){
                    acc.push(newActivity)
                }
                return acc
            }, [])
        }
        return null
    } 
}

export default new GithubService()