import { Component } from 'react'
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap'
import logo from './logo180.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Destinations from '../Pages/Destinations'
import Home from '../Pages/Home'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/firstclass" >
                            <img
                                src={logo}
                                height="60"
                                width="60"
                                className=""
                                alt="Logo"
                            /> FIRSTCLASS
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mx-auto">
                                <Nav.Link href="/firstclass"> Направления </Nav.Link>
                                <Nav.Link href="/firstclass"> Стили путешествий </Nav.Link>
                                <Nav.Link href="/firstclass"> О нас </Nav.Link>
                                <Nav.Link href="/firstclass"> Истории </Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="me-sm-2"
                                />
                                <Button variant="outline-info"> Поиск </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/firstclass" element={<Home/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}
