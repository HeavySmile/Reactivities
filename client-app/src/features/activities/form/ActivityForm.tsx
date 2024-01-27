import { Button, Form, FormInput, FormTextArea, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
}

export default function ActivityForm({activity, closeForm}: Props) {
    return (
        <Segment clearing>
            <Form>
                <FormInput placeholder='Title'/>
                <FormTextArea placeholder='Description'/>
                <FormInput placeholder='Category'/>
                <FormInput placeholder='Date'/>
                <FormInput placeholder='City'/>
                <FormInput placeholder='Location'/>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button onClick={closeForm} floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}