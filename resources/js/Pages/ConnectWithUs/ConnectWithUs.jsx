import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import '../../../css/ConnectWithUs.scss';
import UserHeader from '../../Components/Header/UserHeader';
import Footer from '../../Components/Footer/MainFooter';
import FB from '../../../js/assets/Logos/fb black.png';
import Instar from '../../assets/Logos/Instargram black.png';
import X from '../../assets/Logos/logo X black.png';
import LinkedIn from '../../assets/Logos/linkedIn black.png';
import MainHeader from './../../Components/Header/MainHeader';

const ConnectWithUs = () => {
    //const { post, processing, errors } = useForm();
    const { data,setData, post, processing, errors ,reset} = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/inquiries',{
            data,
            onSuccess: () => {
                setSuccessMessage('Your inquiry has been sent successfully.');
                reset();
                setTimeout(() => setSuccessMessage(''), 5000);
            },
    });
    };

    return (
        <>
           <header>
                <MainHeader />
            </header>

            <main className="connect-container">
                <h1>Connect With Us</h1>
                <p>Have questions? Contact us using the form below or reach out via email or social media.</p>

                {successMessage && <p className="success-message">{successMessage}</p>}

                <div className="contact-section">
                    <div className="contact-form">
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                type="text"
                                 name="name" 
                                 value={data.name} 
                                 onChange={(e) => setData('name', e.target.value)} 
                                 required 
                                 />
                                {errors.name && <p className="error">{errors.name}</p>}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                type="email" 
                                name="email" 
                                value={data.email} 
                                onChange={(e) => setData('email', e.target.value)} 
                                required />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input 
                                type="text" 
                                name="subject" 
                                value={data.subject} 
                                 onChange={(e) => setData('subject', e.target.value)} 
                                required />
                                {errors.subject && <p className="error">{errors.subject}</p>}
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea 
                                name="message" 
                                rows="4"
                                value={data.message} 
                                 onChange={(e) => setData('message', e.target.value)}  
                                required></textarea>
                                {errors.message && <p className="error">{errors.message}</p>}
                            </div>

                            <button type="submit" disabled={processing} className="submit-button">
                                {processing ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                   
    
                        {/*<div className="live-chat-section">
                            <h3>Live Chat</h3>
                            <a 
                                href="https://wa.me/+94710131042" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="whatsapp-button"
                            >
                                Chat on WhatsApp
                            </a>

                           
                            <div id="fb-root"></div>
                            <script async defer crossOrigin="anonymous" 
                                src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" 
                                nonce="YOUR_NONCE">
                            </script>

                            <div className="fb-customerchat"
                                attribution="biz_inbox"
                                page_id="YOUR_PAGE_ID"><span className="messenger-button">Chat On Messenger</span>
                            </div>

                        </div> */}



                                           {/*<div className="contact-info">
                                                <h2>Contact Information</h2>
                                                <p><strong>Email:</strong> support@yourwebsite.com</p>
                                                <p><strong>Phone:</strong> +94 71 234 5678</p>
                                                <p><strong>Location:</strong> Colombo, Sri Lanka</p>

                                                <h3>Follow Us</h3>
                                                <div className="social-links">
                                                    <img src={FB} alt="Facebook" />
                                                    <a href="https://facebook.com" target="_blank">Facebook</a>
                                                    <img src={X} alt="X"/>
                                                    <a href="https://twitter.com" target="_blank">X</a>
                                                    <img src={Instar} alt="Instagram" />
                                                    <a href="https://instagram.com" target="_blank">Instagram</a>
                                                    <img src={LinkedIn} alt="LinkedIn" />
                                                    <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                                                </div>
                                            </div>*/}

                        <div className="contact-section-container">
                                    
                                    
                                    <div className="top-section">
                                        <div className="info-box">
                                            <h2>Contact Information</h2>
                                            <p><strong>Email:</strong> support@yourwebsite.com</p>
                                            <p><strong>Phone:</strong> +94 71 234 5678</p>
                                            <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                                        </div>

                                        <div className="chat-box">
                                            <h3>Live Chat</h3>

                                            <a 
                                                href="https://wa.me/+94710131042" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="whatsapp-button"
                                            >
                                                Chat on WhatsApp
                                            </a>

                                            <div id="fb-root"></div>
                                            <script async defer crossOrigin="anonymous" 
                                                src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" 
                                                nonce="YOUR_NONCE">
                                            </script>

                                            <div className="fb-customerchat"
                                                attribution="biz_inbox"
                                                page_id="YOUR_PAGE_ID"
                                            >
                                                <span className="messenger-button">Chat On Messenger</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                    <div className="social-box">
                                        <h3>Follow Us</h3>
                                        <div className="social-links">
                                            <div className="social-item">
                                                <img src={FB} alt="Facebook" />
                                                <a href="https://facebook.com" target="_blank">Facebook</a>
                                            </div>
                                            <div className="social-item">
                                                <img src={X} alt="X"/>
                                                <a href="https://twitter.com" target="_blank">X</a>
                                            </div>
                                            <div className="social-item">
                                                <img src={Instar} alt="Instagram" />
                                                <a href="https://instagram.com" target="_blank">Instagram</a>
                                            </div>
                                            <div className="social-item">
                                                <img src={LinkedIn} alt="LinkedIn" />
                                                <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                                            </div>
                                        </div>
                                    </div>

                         </div>
                    </div>
                    
            </main>
            <Footer />
        </>
    );
};

export default ConnectWithUs;
