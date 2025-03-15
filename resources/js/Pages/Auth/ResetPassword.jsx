import React from 'react';
import { useForm } from '@inertiajs/react';
import '../ResetPW/ResetPW.scss';
import MainHeader from '../../Components/Header/MainHeader';
import SubFooter from '../../Components/Footer/SubFooter';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const SetNewPw = ({ token, email }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <header>
                <MainHeader />
            </header>

            <div className="reset-password-container">
                <div className="reset-password-overlay">
                    <h2>Set New Password</h2>
                    <p>Choose a strong password to protect your account</p>
                    
                    <form onSubmit={submit}>

                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter New Password" 
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required 
                        />
                        <InputError message={errors.password} className="mt-2" />

                        <input 
                            type="password" 
                            name="password_confirmation" 
                            placeholder="Confirm New Password" 
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required 
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />

                        <PrimaryButton type="submit" disabled={processing}>
                            Change Password
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

export default SetNewPw;