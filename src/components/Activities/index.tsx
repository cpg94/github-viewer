import React, { FunctionComponent } from 'react';
import ActivityClass from '../../classes/Activity';
import Title from '../Title';
import { Container, Activity } from './Activity.css';

interface IActivityProps {
    activities: ActivityClass[];
}

const Activities: FunctionComponent<IActivityProps> = ({ activities }) => (
    <Container>
        <Title title="Activity" />
        {activities && activities.length ? (
            activities.map(activity => (activity ? <Activity key={activity.getId()}>{activity.activitySentence()}</Activity> : null))
        ) : (
            <div>No Activity Data</div>
        )}
    </Container>
);

export default Activities;
