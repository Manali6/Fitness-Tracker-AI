"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginForm = props => {
    const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({});
    const router = useRouter();

    const handleTabChange = tab => {
        setActiveTab(tab);
    };

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        try {
            const data = { message: "Password matched", email: "demo@email.com", password: "1234567890" };
            if (activeTab === 'login' && data.message === "Password matched") {
                const updatedForm = {
                    ...formData,
                    email: data.email,
                    password: data.password,
                };
                router.push("/dashboard");
            }
            else if (activeTab === 'signup') {
                alert("User successfully registered");
            }
            else {
                alert("Invalid username or password");
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div id="loginform">
            <FormHeader activeTab={activeTab} handleTabChange={handleTabChange} />
            {activeTab === 'login' ? <LoginFormInput onChange={handleChange} handleSubmit={handleSubmit} /> : <SignupFormInput onChange={handleChange} handleSubmit={handleSubmit} />}
        </div>
    );
};


const FormHeader = props => {
    return (
        <>
            <div className="form-header">
                <Image src="/logo-transparent.svg" width={200} height={200} alt="Logo for fitness tracker" />
            </div>
            <div className="tabs">
                <button
                    className={props.activeTab === 'login' ? 'active' : ''}
                    onClick={() => props.handleTabChange('login')}
                >
                    Login
                </button>
                <button
                    className={props.activeTab === 'signup' ? 'active' : ''}
                    onClick={() => props.handleTabChange('signup')}
                >
                    Signup
                </button>
            </div>
        </>
    );
};

const LoginFormInput = props => (
    <div>
        <FormInput name="username" description="Username" placeholder="Enter Username" type="text" onChange={props.onChange} />
        <FormInput name="password" description="Password" placeholder="Enter Password" type="password" onChange={props.onChange} />
        <FormButton title="Submit" handleSubmit={props.handleSubmit} />
    </div>
);

const SignupFormInput = props => (
    <div>
        <FormInput name="username" description="Username" placeholder="Enter Username" type="text" onChange={props.onChange} />
        <FormInput name="password" description="Password" placeholder="Enter Password" type="password" onChange={props.onChange} />
        <FormInput name="email" description="Email" placeholder="Enter Email" type="email" onChange={props.onChange} />
        <FormInput name="contactNumber" description="Contact Number" placeholder="Enter Contact Number" type="number" onChange={props.onChange} />
        <FormButton title="Register" handleSubmit={props.handleSubmit} />
    </div>
);


const FormButton = props => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div id="button" className="row">
                    <button>{props.title}</button>
                </div>
            </form>
        </div>
    );
};

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
);

export default LoginForm;