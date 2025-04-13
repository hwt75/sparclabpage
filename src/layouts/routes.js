import * as React from "react";
import {Route, Routes as ReactRouterRoutes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ErrorPage} from "../pages/errorPage";
import { ProjectPage } from "../pages/project/project";

export const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/error" element={<ErrorPage/>} />
            <Route path="/project" element={<ProjectPage/>} />
            <Route path="*" element={<HomePage/>} />
        </ReactRouterRoutes>
    )
}