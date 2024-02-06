import { Button, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, Label, Segment, SegmentGroup } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Link } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
    const [target, setTarget] = useState('');
    const {activityStore} = useStore();
    const {activitiesByDate, deleteActivity, loading} = activityStore;

    function handleActivityDelete(event: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(event.currentTarget.name);
        deleteActivity(id);
    }
    
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <ItemImage size='tiny' circular src='/assets/user.png'></ItemImage>
                        <ItemContent>
                            <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </ItemHeader>
                            <ItemDescription>Hosted by Leo</ItemDescription>
                        </ItemContent>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/> {activity.date}
                    <Icon name="marker"/> {activity.location}
                </span>
            </Segment>
            <Segment secondary>
                Participants go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                    as={Link} 
                    to={`/activities/${activity.id}`} 
                    color="teal" 
                    floated="right" 
                    content="View"
                />

            </Segment>
        </SegmentGroup>
    )
}