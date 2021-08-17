import React,{ useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"
import "./contact.css"


const Contact = () => {

    const [formState, setFormState] = useState({
        name: "",
        emaail: "",
        message: ""
    })


    const encode = (data) => {
        const {name, email, message} = data
        return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
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
            <form data-netlify="true" onSubmit={handleSubmit} name="contact" class="form-group col-md-6 more-spacing"  >
                <input type="hidden" name="form-name" value="contact"  />
                <label>
                    Name
                    <input class="form-control col-md-6 more-spacing" type="text" name="name" placeholder="Johnny Appleseed" onChange={handleChange} value={formState.name}/>
                </label>
                <label>
                    Email
                    <input class="form-control col-md-6 more-spacing" type="email" name="email" placeholder="Johnny@aapple.com" onChange={handleChange}  value={formState.email} />
                </label>
                <label>
                    
                    <textarea name="message" placeholder="Hey what's up ?" onChange={handleChange} value={formState.message} ></textarea>
                </label>
                <input class="form-control col-md-6 more-spacing" type="submit" value="Contact Me!" />
            </form>
        </Layout>
    )
}


export default Contact