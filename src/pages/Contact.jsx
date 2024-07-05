import { Suspense, useState, useRef } from 'react'

// EmailJS is an API.
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Alert from '../components/Alert'

import Robot from '../models/Robot'
import useAlert from '../hooks/useAlert'



const Contact = () => {
    const formRef = useRef(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('amature|flying');

    const { alert, showAlert, hideAlert } = useAlert();



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);


        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Khang',
                    from_email: form.email, // the users email 
                    to_email: 'hellokhangtran@gmail.com', // my email address
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                showAlert({ show: true, text: "Message sent successfully!", type: "success" });

                setTimeout(() => {
                    hideAlert(false);
                    setForm({ name: '', email: '', message: '' });

                    //  the 3000 is the time in milliseconds
                    //  set timeout is resetting the form back to empty after 1,5 seconds
                }, [1500]);



            }).catch((error) => {
                setLoading(false);
                showAlert({ show: true, text: "I didn't receieve your message!", type: "danger" })
                console.log(error)

            });
    };

    // amature|flying is the animation that the robot is doing from Sketchfab
    const handleFocus = () => setCurrentAnimation('amature|flying');

    // active this if you want the animation to stop in the form (find the handleBlur below)
    // "Static Pose" is the name of the animation from Sketchfab of the robot

    // const handleBlur = () => setCurrentAnimation('Static Pose');

    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            {alert.show && <Alert {...alert} />}


            <div className="flex-1 min-w [50%] flex flex-col">
                <h1 className="head-text">
                    Get in Touch
                </h1>

                <form className="w-full flex flex-col gap-7 mt-14"
                    onSubmit={handleSubmit}
                >


                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="John Smith"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        //  activate handleBlur if you want the sketchfab animation to be static and not movve ( see the const handlBlur above)
                        // onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="John@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        // onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Your Message
                        <textarea
                            name="message"
                            rows={4}
                            className="textarea"
                            placeholder="How can I improve your life?"
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                        // onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        disabled={loading}
                        onFocus={handleFocus}
                    // onBlur={handleBlur}
                    >
                        {loading ? 'Sending...' : 'Send Message'}

                    </button>
                </form>
            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={0.5} />

                    <Suspense fallback={<Loader />}>
                        <Robot
                            currentAnimation={currentAnimation}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section >
    )
}



export default Contact