import React from 'react'
import { toast } from 'react-toastify'
import { Toast } from 'react-toastify'
import axios from 'axios'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
   
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
      axios.post("http://localhost:8053/contect/",conFom)
      .then(
        (res)=>
        {
          toast.success("Submitted Request")
        }

      )
      .catch(
        (err)=>{
          toast.error("server error")
        }
      )
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input style={{height: "40px"}}  className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input style={{height: "40px"}}  className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm