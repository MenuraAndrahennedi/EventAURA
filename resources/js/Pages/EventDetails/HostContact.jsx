import React, { useState,useEffect } from "react";
import { useForm, usePage ,Link} from "@inertiajs/react";
import TBHeader from "../../Components/Header/TBHeader";
import SubFooter from "../../Components/Footer/SubFooter";
import "../../../css/HostContact.scss";
import HostImage from "../../assets/Logos/HostLogo.png";

const HostContact = ({ event }) => {
    // Extract flash messages and auth info from page props
    const { flash, auth } = usePage().props;

    // Initialize form data and methods using Inertia useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        telephone: "",
        message: "",
        event_id: event.id,
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("host.contact"), {
            onSuccess: () => {
                reset(); // Clear form after successful submission
            },
        });
    };

    // State to control display of success message
    const [showSuccess, setShowSuccess] = useState(!!flash.success);
    // State to control fade animation of success message
    const [fade, setFade] = useState(false);
    // State to toggle chat visibility (not used here but declared)
    const [showChat, setShowChat] = useState(false);

    // Effect to handle fade and hide timing for success message
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
              <h1>Get in Touch with Host</h1> 
              <img
                    src={HostImage}
                    alt="HostIcon"
                    className="Host-icon"
             />
              <p>Here we have provided you the chance to contact
                with the event organizer and solve your problems
                about the event.You can send an email to the event host or you can start a live chat with the event host.</p>
            
            
            <section className="contact-form">
                {/* Success message with fade effect */}
                 {showSuccess && (
                    <p className={`success-message ${fade ? "fade-out" : ""}`}>
                        {flash.success}
                    </p>
                )}

                {/* Error message */}
                {flash.error && (
                    <p className="error-message">{flash.error}</p>
                )}

                 {/* Contact form */}
                <form onSubmit={handleSubmit} className="contact-form">
                    {/* Name input */}
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="form-input"
                        required
                    />
                    {/* Name validation error */}
                    {errors.name && <p className="error">{errors.name}</p>}


                    {/* Email input */}
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="form-input"
                        required
                    />
                    {/* Email validation error */}
                    {errors.email && <p className="error">{errors.email}</p>}

                    {/* Telephone input */}
                    <input
                        type="text"
                        placeholder="Your Telephone"
                        value={data.telephone}
                        onChange={(e) => setData("telephone", e.target.value)}
                        className="form-input"
                        required
                    />
                    {errors.telephone && <p className="error">{errors.telephone}</p>}

                    {/* Message textarea */}
                    <textarea
                        placeholder="Your Message"
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        className="form-textarea"
                        required
                    />
                    {errors.message && <p className="error">{errors.message}</p>}

                    {/* Submit button */}
                    <button type="submit" disabled={processing} className="submit-button">
                        Send Email to the Event host
                    </button>

                    {/* Live chat section */}
                    <div className="chat-section">
                         {/* Show live chat link only for logged-in users with role_id 5 */}
                         {(auth.user  && auth.user.role_id === 5 ) ?(
                            <Link 
                                href={`/chatify/${event.event_host_id}`} // Verify your Chatify route
                                className="live-chat-button"
                            >
                                Start Live Chat with Host
                            </Link>
                          ) : (
                            // Prompt login for others
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
