import React from 'react';
import { useForm } from '@inertiajs/react';
import MainHeader from '../../Components/Header/MainHeader';
import SubFooter from '../../Components/Footer/SubFooter';
import '../ResetPW/ResetPW.scss';
import PrimaryButton from '@/Components/PrimaryButton';

const PWVerification = ({ status }) => {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <>
            <header>
                <MainHeader />
            </header>

            <div className="reset-password-container">
                <div className="reset-password-overlay">
                    <h2>Email Verification</h2>
                    <p>
                        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                    </p>
                    
                    {status === 'verification-link-sent' && (
                        <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                            A new verification link has been sent to your email.
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <PrimaryButton disabled={processing}>
                            Resend Verification Email
                        </PrimaryButton>
                    </form>
                </div>
            </div>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default PWVerification;
