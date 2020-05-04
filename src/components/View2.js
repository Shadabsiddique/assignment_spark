import {Row, Card, CardBody,CardTitle, Label} from 'reactstrap';
import React, {Fragment} from 'react';
import {uncheck} from '../actions';
import './view2.css';
import {connect} from "react-redux";

const View2 = ({state, uncheck}) => {
    return(
            <div className="view2">
                <Card>
                <CardBody>
                    {
                        Object.entries(state).map(stateItem => {

                            const values = Object.values(stateItem[1]).filter(item=>item);
                            if(values.length === 0) return null;

                            return <Fragment>
                                <Row> <CardTitle><strong>{stateItem[0]}</strong></CardTitle></Row>
                                {Object.entries(stateItem[1]).map(item => {
                                    if(item[1]===false)return null;
                                    return <Row className="item" >
                                    <Label className="selected-label" check>
                                        <input disabled className="selected" value={item[0]} type="text" /><span onClick={(e)=>uncheck(stateItem[0], item[0])} className="cross">x</span>
                                    </Label>
                                </Row>
                                })}
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
        uncheck: (parent, child)=>{
            dispatch(uncheck(parent, child));
        }

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(View2);