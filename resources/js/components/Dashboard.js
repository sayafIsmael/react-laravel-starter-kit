import React, { useEffect } from 'react'
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/Counter/actions';

function Dashboard() {
  const { isAuthenticated, validateUserLoader } = useSelector(state => state.authenticateReducer)
  const { guestcounter, usercounter } = useSelector(state => state.counterReducer)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.GET_COUNTER,
    });
  }, [])

  const update = (values) => {
    console.log(values)
    dispatch({
      type: actions.UPDATE_COUNTER,
      payload: values,
    });
  };

  useEffect(() => {
    console.log("guestcounter, usercounter: ", guestcounter, usercounter)
  }, [guestcounter, usercounter])

  return (
    <div className="dashboard">

      <Card title="Guest Counter" bordered={false} style={{ width: 300, backgroundColor: '#ececec', marginRight: 50 }}>
        <p style={{ fontSize: 34 }}>{guestcounter}</p>
        <Button type="primary" onClick={() => {
          update({
            guestcounter: Number(guestcounter) + 1,
            usercounter
          })
        }}>+</Button>
        <Button type="primary" danger onClick={() => {
          update({
            guestcounter: Number(guestcounter) - 1,
            usercounter
          })
        }}>-</Button>
      </Card>

      {usercounter && <Card title="User Counter" bordered={false} style={{ width: 300, backgroundColor: '#ececec' }}>
        <p style={{ fontSize: 34 }}>{usercounter}</p>
        <Button type="primary" onClick={() => {
          update({
            guestcounter,
            usercounter: Number(usercounter) + 1
          })
        }}>+</Button>
        <Button type="primary" danger onClick={() => {
          update({
            guestcounter,
            usercounter: Number(usercounter) - 1
          })
        }}>-</Button>
      </Card>}
    </div>
  );
}

export default Dashboard;
