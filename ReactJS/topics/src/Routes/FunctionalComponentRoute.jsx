import React from 'react';
import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './../Components/FunctionalComponent/01FunctionalCompoMenu.jsx';
import FunctionalComponentIntro from './../Components/FunctionalComponent/02fucntionalcompointro.jsx';
import FunctionalComponentState from './../Components/FunctionalComponent/03FunctionalComponentState.jsx';
import FunctionalComponentProps from './../Components/FunctionalComponent/04FunctionalComponentProps.jsx';
import FunctionalComponentUseEffect from './../Components/FunctionalComponent/05FunctionalComponentUseEffect.jsx';
import FunctionalComponentUseLayoutEffect from './../Components/FunctionalComponent/06FunctionalComponentUseLayoutEffect.jsx';
import FunctionalComponentUseEffectUseLayoutEffect from './../Components/FunctionalComponent/07FunctionalComponentUseEffectUseLayoutEffect.jsx';
import FunctionalComponentUseMemo from './../Components/FunctionalComponent/08FunctionalComponentUseMemo.jsx';
import FunctionalComponentUseCallback from './../Components/FunctionalComponent/09FunctionalComponentUseCallback.jsx';
import FunctionalCompoUseMemoFactorialExample from './../Components/FunctionalComponent/11FunctionalCompoUseMemoExample.jsx';
import FunctionalUseContext from './../Components/FunctionalComponent/UseContextExmaple/12FunctionalUseContext.jsx';
import FunctionalImperativeHandle from './../Components/FunctionalComponent/ImperativeHandle/13FunctionalImperativeHandle.jsx';
import FunctionaluseRef from './../Components/FunctionalComponent/14useRef.jsx';
import FunctionalUseReducer from './../Components/FunctionalComponent/15FunctionalUseReducer.jsx';
import FunctionalHonyComTask from './../Components/FunctionalComponent/HonyComTask/userImperativeMain.jsx';

const FunctionalComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "functionalcompointro",
                    element: <FunctionalComponentIntro />,
                },{
                    path: "fucntionalhooks",
                    element: <FunctionalComponentIntro />,
                },{
                    path: "functionalcompostate",
                    element: <FunctionalComponentState />,
                },{
                    path: "functionalcompoprops",
                    element: <FunctionalComponentProps />,
                },{
                    path: "functionalcompouseeffect",
                    element: <FunctionalComponentUseEffect />,
                },{
                    path: "functionalcompouselayouteffect",
                    element: <FunctionalComponentUseLayoutEffect />,
                },{
                    path: "functionalcompouseeffectuselayouteffect",
                    element: <FunctionalComponentUseEffectUseLayoutEffect />,
                },{
                    path: "functionalcompousememo",
                    element: <FunctionalComponentUseMemo />,
                },{
                    path: "functionalcompousecallback",
                    element: <FunctionalComponentUseCallback />,
                },{
                    path: "functionalcompousememoexample",
                    element: <FunctionalCompoUseMemoFactorialExample />,
                },{
                    path: "functionalcompousecontext",
                    element: <FunctionalUseContext />,
                },{
                    path: "functionalimperativehandle",
                    element: <FunctionalImperativeHandle />,
                },{
                    path: "functionaluseref",
                    element: <FunctionaluseRef />,
                },{
                    path: "functionalusereducer",
                    element: <FunctionalUseReducer />,
                },{
                    path: "honycomtask",
                    element: <FunctionalHonyComTask />,
                },
            ]
        }
    ])
    return routes;
}
export default FunctionalComponentRoute;
