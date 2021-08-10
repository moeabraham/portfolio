import React from "react"
import Layout from "../components/layout"

const Contact = () => {

    return (
        <Layout>
            <h1>Contact</h1>
            <form data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <label>
                    Name
                    <input type="text" name="name" placeholder="Johnny Appleseed" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" placeholder="Johnny@aapple.com" />
                </label>
                <label>
                    Messages
                    <textarea name="message" placeholder="Hey what's up ?" ></textarea>
                </label>
                <input type="submit" value="Contact Me!" />
            </form>
        </Layout>
    )
}


export default Contact