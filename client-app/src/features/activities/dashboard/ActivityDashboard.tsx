import { Grid, GridColumn} from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityMap} = activityStore;

    useEffect(() => {
        if (activityMap.size <= 0) loadActivities();
    }, [loadActivities, activityMap.size])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <GridColumn width='6'>
                <h2>Activity filters</h2>
            </GridColumn>
        </Grid>
    )
})