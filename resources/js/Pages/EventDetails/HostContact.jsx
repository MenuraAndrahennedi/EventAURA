import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import TBHeader from "../../Components/Header/TBHeader";
import SubFooter from "../../Components/Footer/SubFooter";
import "../../../css/HostContact.scss";

const HostContact = ({ event }) => {
    const { flash } = usePage().props;

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

    return (
        <>
            <header>
                <TBHeader />
            </header>

            <section className="contact-form">
                {flash.success && <p className="success-message">{flash.success}</p>}
                {flash.error && <p className="error-message">{flash.error}</p>}

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="form-input"
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input
                        type="email"
                        placeholder="Your Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="form-input"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input
                        type="text"
                        placeholder="Your Telephone"
                        value={data.telephone}
                        onChange={(e) => setData("telephone", e.target.value)}
                        className="form-input"
                    />
                    {errors.telephone && <p className="error">{errors.telephone}</p>}

                    <textarea
                        placeholder="Your Message"
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        className="form-textarea"
                    />
                    {errors.message && <p className="error">{errors.message}</p>}

                    <button type="submit" disabled={processing} className="submit-button">
                        Submit
                    </button>
                </form>
            </section>
            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default HostContact;
