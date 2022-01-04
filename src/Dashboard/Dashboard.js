import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router";
import MyOrder from '../Dashboard/MyOrder'
const Dashboard = () => {
    let { path } = useRouteMatch();
    return (
        <div>
        <Switch>
        <Route exact path={`${path}/myorder`}>
            <MyOrder></MyOrder>
        </Route>
        </Switch>
        </div>
    );
};

export default Dashboard;