import React from "react";
import Layout from "../layout";

import Header from './components/header'
import FindJob from './components/find'

import {Route,Routes,Switch} from "react-router-dom"
import { BrowserRouter as Router} from 'react-router-dom'

export default function Routt(){
    return(
        <>
        <Router>
        <Layout>

                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Header />} />
                        <Route path="/findJob" element={<FindJob />} />
                    </Route>
                </Routes>

        </Layout>
        </Router>
        </>
    )
}