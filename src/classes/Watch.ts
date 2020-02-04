import Activity from "./Activity";
import { IActivity } from "../models/Activity";

class Watch extends Activity {
    constructor(activity: IActivity){
        super(activity)
    }

    activitySentence = () => {
        return `Watched ${this.getRepo()}`
    }
}

export default Watch