import Activity from "./Activity";
import { IActivity } from "../models/Activity";

class Issue extends Activity {
    constructor(activity: IActivity){
        super(activity)
    }

    activitySentence = () => {
        return `Raised issue for ${this.getRepo()}`
    }
}

export default Issue