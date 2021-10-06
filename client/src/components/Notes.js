import React from 'react'
import CreateNote from './notes/CreateNote';
import EditNote from './notes/EditNote';
import Home from './notes/Home';
import Header from './notes/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function Notes({setIsLogin}) {
    return (
        <Router>
        <div className="notes-page">
            <Header setIsLogin={setIsLogin}  />
            <section>
                <Route path='/' component={Home} exact />
                <Route path='/create' component={CreateNote} exact />
                <Route path='/edit/:id' component={EditNote} exact />

            </section>
        </div>
        </Router>
    )
}

