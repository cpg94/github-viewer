import Activity from "./Activity";
import { IActivity } from "../models/Activity";

class Create extends Activity {
    constructor(activity: IActivity){
        super(activity)
    }

    activitySentence = () => {
        return `Created repository ${this.getRepo()}`
    }
}

export default Create