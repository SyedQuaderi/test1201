import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import SpatialNavigation, {FocusableSection, Focusable } from 'react-js-spatial-navigation';

function Sessions(props) {
    return (
        <Col sm={3} className="sessions-main">
            <Row>
                <Col className="session-today">
                {
                    props.state.sessions.today.map((session, i) =>
                    <Focusable  onFocus={() => props.addFocusToActivity(session)} key={i} onUnFocus={() => props.removeFocusFromActivity(session)}>
                        <Button className={"activity-button " + (props.activeFocus === session.id ? "activity-button-active " : "activity-button-inactive")}  
                                onClick={()=> props.selectActivity(session)}>
                                {props.activityName.today}
                            <div className={"selection-arrow " + (props.activeFocus === session.id ? "selection-arrow-active "  : "selection-arrow-inactive")}>
                            </div>
                        </Button>
                    </Focusable>
                    )
                }
                </Col>
            </Row>
            <Row>
                <Col className="session-tomorrow">
                {
                    props.state.sessions.tomorrow.map((session, i) =>
                    <Focusable  onFocus={() => props.addFocusToActivity(session)} key={i} onUnFocus={() => props.removeFocusFromActivity(session)}>
                        <Button className={"activity-button " + (props.activeFocus === session.id ? "activity-button-active " : "activity-button-inactive")}  
                                onClick={()=> props.selectActivity(session)}>
                                {props.activityName.tomorrow}
                            <div className={"selection-arrow " + (props.activeFocus === session.id ? "selection-arrow-active "  : "selection-arrow-inactive")}>
                            </div>
                        </Button>
                    </Focusable>
                    )
                }
                </Col>
            </Row>
        </Col>
    )
}

export default Sessions
