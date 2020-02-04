import { IActivity } from "../models/Activity";

abstract class Activity {
    activity: IActivity
    constructor(activity: IActivity){
        this.activity = activity
    }

    getActor = () => this.activity.actor.login

    getRepo = () => this.activity.repo.name

    getType = () => this.activity.type

    getId = () => this.activity.id

    abstract activitySentence(): string
}

export default Activity