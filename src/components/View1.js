import { Row, Card, CardBody, CardTitle, Label } from 'reactstrap';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './view1.css';
import { check, uncheck } from '../actions';

const View1 = ({ state, check, uncheck }) => {
    return (
        <div className="view1">
            <Card>

                <CardBody>
                    {
                        Object.entries(state).map(stateItem => {
                            return <Fragment>
                                <Row> <CardTitle><strong>{stateItem[0]}</strong></CardTitle></Row>
                                {Object.entries(stateItem[1]).map(item => {
                                    return <Row className="item" >
                                    <Label check>
                                        <input onChange={({target: {checked}})=> { checked ?  check(stateItem[0], item[0]) : uncheck(stateItem[0], item[0])  }}  type="checkbox" checked={item[1]} />{' '} {item[0]}
                                    </Label>
                                </Row>
                                } ) }
                            </Fragment>
                        })
                    }
                </CardBody>
            </Card>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        state
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        check: (parent, child) => {
            dispatch(check(parent, child));
        },
        uncheck: (parent, child) => {
            dispatch(uncheck(parent, child));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View1);

