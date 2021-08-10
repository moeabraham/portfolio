import React,{ useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"

const Contact = () => {

    const [formState, setFormState] = useState({
        name: "",
        emaail: "",
        message: ""
    })


    const encode = (data) => {

        return Object.keys(data).map(key => (

            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )).join('&')
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/contact',{
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        })

        setFormState({
            name:"",
            email:"",
            message:"",
        })

        navigate('/')
    }




    return (
        <Layout>
            <Head page="Contact" />
            <h1>Contact</h1>
            <form data-netlify="true" onSubmit={handleSubmit} name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <label>
                    Name
                    <input type="text" name="name" placeholder="Johnny Appleseed" onChange={handleChange} value={formState.name}/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" placeholder="Johnny@aapple.com" onChange={handleChange}  value={formState.email} />
                </label>
                <label>
                    Messages
                    <textarea name="message" placeholder="Hey what's up ?" onChange={handleChange} value={formState.message} ></textarea>
                </label>
                <input type="submit" value="Contact Me!" />
            </form>
        </Layout>
    )
}


export default Contact