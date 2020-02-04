import Activity from "./Activity";
import { IActivity } from "../models/Activity";

class Push extends Activity {
    constructor(activity: IActivity){
        super(activity)
    }

    activitySentence = () => {
        return `Pushed to ${this.getRepo()}`
    }
}

export default Push