import React from 'react';
import { useRoutes } from 'react-router-dom';
import ClassCompoMenu from './../Components/ClassComponent/01ClassCompoMenu';
import ClassComponentIntro from './../Components/ClassComponent/02ClassCompoIntro';
import ComponentInReact from './../Components/ClassComponent/03Component.jsx';
import ExampleOfJSX from './../Components/ClassComponent/04ExampleOfJSX.jsx';
import ExampleOfEvent from './../Components/ClassComponent/05ExampleOfEvent.jsx';
import StateInClassCompo from './../Components/ClassComponent/06StateInClassCompo.jsx';
import PropsInClassCompo from './../Components/ClassComponent/07PropsInClassCompo.jsx';
import StateLifeCycleInClassCompo from './../Components/ClassComponent/09StateLifeCycleInClassCompo.jsx';
import StateLifeCycleInClassCompoLoader from './../Components/ClassComponent/10statelifecycleloader';
import ConditionalRendering from './../Components/ClassComponent/12ConditionalRendering';

const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <ClassCompoMenu />,
            children: [
                {
                    path: "whatiscomponent",
                    element: <ComponentInReact />,
                },{
                    path: "classcompointro",
                    element: <ClassComponentIntro />,
                },{
                    path: "jsx",
                    element: <ExampleOfJSX />,
                },{
                    path: "event",
                    element: <ExampleOfEvent />,
                },{
                    path: "state",
                    element: <StateInClassCompo />,
                },{
                    path: "propsinclass",
                    element: <PropsInClassCompo />,
                },{
                    path: "statelifecycle",
                    element: <StateLifeCycleInClassCompo />,
                },{
                    path: "statelifecycleloader",
                    element: <StateLifeCycleInClassCompoLoader />,
                },{
                    path: "classcompoconditionalrender",
                    element: <ConditionalRendering />,
                },
            ]
        }
    ])
    return routes;
}
export default ClassComponentRoute;