import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactGA from 'react-ga';
import { Form, Button } from "react-bootstrap";
//ReactGA.initialize('G-GQ7PW6FH0Z');

const formName ="littleRedContactUs";

export default function Contact(props) {
    const siteTitle = "Little Red Soap Company";
    const [data, setData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        if (typeof "window" !== "undefined") {
           // ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [])

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": formName, ...data })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    const handleChange = e => setData({ ...data, [e.target.name]: e.target.value });
    const { name, email, message } = data;
    return (
        <Layout location={props.location} title={siteTitle}>
            <SEO
                title="Contact"
                keywords={[`custom soap`, `CBD soap`, `goats milk soap`, `facial cream`]}
            />
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <Form name={formName} onSubmit={handleSubmit} data-netlify="true" >
                        <input type="hidden" name="form-name" value={formName} />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="enter your name" type="text" value={name} onChange={handleChange} name="name" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" value={message} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </Layout>
    )
}
