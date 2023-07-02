import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaShareAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
    useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[])
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hzhypp8",
        "template_ee7mvbl",
        form.current,
        "iBoi8Eh5ILJBk8WVm"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent',
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="mt-20 pb-20" data-aos="fade-down">
      <h2 className="text-center font-fold text-5xl text-white pb-20">
        Contact Me
      </h2>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="">
          <form className="flex flex-col w-72 md:w-96 md:me-20" ref={form} onSubmit={sendEmail}>
            <label className="text-white">Name</label>
            <input className="p-1 rounded" required placeholder="Your Name" type="text" name="user_name" />
            <br />
            <label className="text-white">Email</label>
            <input className="p-1 rounded" required placeholder="Your Email" type="email" name="user_email" />
            <br />
            <label className="text-white">Message</label>
            <textarea className="p-1 rounded" required placeholder="Your Message" name="message" />
            <br />
            <input className="text-white btn btn-primary" type="submit" value="Send" />
          </form>
        </div>
        <div className="text-white flex md:mt-0 mt-5 flex-col gap-5 md:text-2xl">
          <div className="flex items-center">
            <FaEnvelope size={20}></FaEnvelope>
            <p className="ms-2">Email: 71ahmedrahi@gmail.com</p>
          </div>
          <div className="flex items-center">
            <FaMobileAlt size={20}></FaMobileAlt>
            <p className="ms-2">Mobile: +8801887906859</p>
          </div>
          <div className="flex items-center">
            <FaShareAlt size={20}></FaShareAlt>
            <p className="ms-2 me-2">Social:</p>
            <a href="https://www.facebook.com/ahmed.rahi.92798072"><FaFacebook size={20} className="me-3"></FaFacebook></a>
            <a href="https://www.linkedin.com/in/ahmed-rahi-538560275/"><FaLinkedin size={20} className="me-3"></FaLinkedin></a>
            <a href="https://github.com/AhmedRahi18"><FaGithub size={20}></FaGithub></a>
          </div>
          <div className="flex items-center">
            <FaMapMarkedAlt></FaMapMarkedAlt>
            <p className="ms-2">Address: Chittagong, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
