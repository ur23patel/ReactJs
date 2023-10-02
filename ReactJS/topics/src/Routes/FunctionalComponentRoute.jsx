import React from 'react';
import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './../Components/FunctionalComponent/01FunctionalCompoMenu.jsx';
import FunctionalComponentIntro from './../Components/FunctionalComponent/02fucntionalcompointro.jsx';

const FunctionalComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "functionalcompointro",
                    element: <FunctionalComponentIntro />,
                },
                {
                    path: "fucntionalhooks",
                    element: <FunctionalComponentIntro />,
                },
            ]
        }
    ])
    return routes;
}
export default FunctionalComponentRoute;