import React, { useState,useEffect } from "react";
import { useForm, usePage ,Link} from "@inertiajs/react";
import TBHeader from "../../Components/Header/TBHeader";
import SubFooter from "../../Components/Footer/SubFooter";
import "../../../css/HostContact.scss";
import HostImage from "../../assets/Logos/HostLogo.png";

const HostContact = ({ event }) => {
    const { flash,auth } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        telephone: "",
        message: "",
        event_id: event.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("host.contact"), {
            onSuccess: () => {
                reset(); // clear form after success
            },
        });
    };

    const [showSuccess, setShowSuccess] = useState(!!flash.success);
    const [fade, setFade] = useState(false);
    const [showChat, setShowChat] = useState(false);


    useEffect(() => {
        if (flash.success) {
            setShowSuccess(true);
            const fadeTimer = setTimeout(() => setFade(true), 3000); // fade after 3s
            const hideTimer = setTimeout(() => setShowSuccess(false), 4000); // hide after 4s

            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [flash.success]);


    return (
        <div className="contact-wrapper">
            <header>
                <TBHeader />
            </header>
            <div className="contact-form-container">
              <h1>Get in Touch with Host</h1> <img
                            src={HostImage}
                            alt="HostIcon"
                            className="Host-icon"
                        />
             
              <p>Here we have provided you the chance to contact
                with the event organizer and solve your problems
                about the event.You can send an email to the event host or you can start a live chat with the event host.</p>
            <section className="contact-form">
                {/* {flash.success && <p className="success-message">{flash.success}</p>}
                {flash.error && <p className="error-message">{flash.error}</p>} */}
                 {showSuccess && (
                    <p className={`success-message ${fade ? "fade-out" : ""}`}>
                        {flash.success}
                    </p>
                )}

                {flash.error && (
                    <p className="error-message">{flash.error}</p>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="form-input"
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input
                        type="email"
                        placeholder="Your Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="form-input"
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input
                        type="text"
                        placeholder="Your Telephone"
                        value={data.telephone}
                        onChange={(e) => setData("telephone", e.target.value)}
                        className="form-input"
                        required
                    />
                    {errors.telephone && <p className="error">{errors.telephone}</p>}

                    <textarea
                        placeholder="Your Message"
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        className="form-textarea"
                        required
                    />
                    {errors.message && <p className="error">{errors.message}</p>}

                    <button type="submit" disabled={processing} className="submit-button">
                        Send Email to the Event host
                    </button>

                    <div className="chat-section">
                    {auth.user ? (
                        <Link 
                            href={`/chatify/${event.event_host_id}`} // Verify your Chatify route
                            className="live-chat-button"
                        >
                            Start Live Chat with Host
                        </Link>
                    ) : (
                        <div className="auth-prompt">
                            <Link href={route('tb.login')} className="auth-link">
                                Log in
                            </Link> to start a live chat
                        </div>
                    )}
                </div>
                
                </form>
            </section>
            </div>
            <footer>
                <SubFooter />
            </footer>
        </div>
    );
};

export default HostContact;
