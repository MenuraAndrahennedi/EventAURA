import React from 'react';
import { useForm } from '@inertiajs/react';
import MainHeader from '../../Components/Header/MainHeader';
import SubFooter from '../../Components/Footer/SubFooter';
import '../../../css/ResetPW.scss';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const ForgotPW = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <>
            <header>
                <MainHeader />
            </header>

            <div className="reset-password-container">
                <div className="reset-password-overlay">
                    <h2>Password Reset</h2>
                    <p>Enter your email address to reset your password</p>
                    
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required 
                        />
                        <InputError message={errors.email} className="mt-2" />

                        <button type="submit" disabled={processing}>Reset</button>
                    </form>
                </div>
            </div>
            
            <footer>
                <SubFooter />
            </footer>
        </>
    );
};

export default ForgotPW;
