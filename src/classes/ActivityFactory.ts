import { IActivity } from "../models/Activity";
import Create from './Create'
import Push from './Push'
import Watch from './Watch'
import Issue from './Issue'

class ActivityFactory {
    activity: IActivity
    constructor(activity: IActivity){
        this.activity = activity    
    }

    getActivity = () => {
        switch (this.activity.type) {
            case "CreateEvent":
                return new Create(this.activity)
            case "WatchEvent":
                return new Watch(this.activity)
            case "PushEvent":
                return new Push(this.activity)
            case "IssuesEvent":
                return new Issue(this.activity)
            default:
        }
    }
}

export default ActivityFactory