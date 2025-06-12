import React from "react";
import "../../../css/TBLogin.scss";
import MainHeader from "./../../Components/Header/MainHeader";
import SubFooter from "./../../Components/Footer/SubFooter";
import { Link, useForm } from "@inertiajs/react";

const TBCreateAccount = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        telephone: "",
        password: "",
        password_confirmation: "",
        role_id: 5, // Assuming 2 represents the role of "Ticket Buyer"
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register");
    };
    return (
        <>
            <header>
                <MainHeader />
            </header>

            <main>
                <div className="TB-Loginform-container">
                    <div className="TB-Login-overlay">
                        <h2>Create your Account</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={data.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && (
                                <div className="error">{errors.name}</div>
                            )}

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && (
                                <div className="error">{errors.email}</div>
                            )}

                            <input
                                type="text"
                                name="telephone"
                                placeholder="Telephone No"
                                value={data.telephone}
                                onChange={handleChange}
                                required
                            />
                            {errors.telephone && (
                                <div className="error">{errors.telephone}</div>
                            )}

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={handleChange}
                                required
                            />
                            {errors.password && (
                                <div className="error">{errors.password}</div>
                            )}

                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                value={data.password_confirmation}
                                onChange={handleChange}
                                required
                            />
                            {errors.password_confirmation && (
                                <div className="error">
                                    {errors.password_confirmation}
                                </div>
                            )}

                            <button type="submit" disabled={processing}>
                                Continue
                            </button>

                            <div className="sign-up">
                                <small>
                                    {" "}
                                    <Link to="/terms" className="custom-link">
                                        Terms and Conditions
                                    </Link>
                                </small>
                            </div>
                        </form>

                        <hr className="custom-hr" />

                        <div className="sign-up">
                            <small>
                                Already Have an account ?{" "}
                                <Link href={route("tb.login")}className="custom-link">Sign in</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default TBCreateAccount;
