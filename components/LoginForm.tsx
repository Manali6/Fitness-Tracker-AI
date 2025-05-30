"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const router = useRouter();

    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            const data = { username: "admin", password: "12345" };
            if (activeTab === 'login' && formData.username === data.username && formData.password === data.password) {
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


const FormHeader = (props: { activeTab: string; handleTabChange: (arg0: string) => void; }) => {
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

const LoginFormInput = (props: { onChange: any; handleSubmit: any; }) => (
    <div>
        <FormInput name="username" description="Username" placeholder="Enter Username" type="text" onChange={props.onChange} />
        <FormInput name="password" description="Password" placeholder="Enter Password" type="password" onChange={props.onChange} />
        <FormButton title="Submit" handleSubmit={props.handleSubmit} />
    </div>
);

const SignupFormInput = (props: { onChange: any; handleSubmit: any; }) => (
    <div>
        <FormInput name="username" description="Username" placeholder="Enter Username" type="text" onChange={props.onChange} />
        <FormInput name="password" description="Password" placeholder="Enter Password" type="password" onChange={props.onChange} />
        <FormInput name="email" description="Email" placeholder="Enter Email" type="email" onChange={props.onChange} />
        <FormInput name="contactNumber" description="Contact Number" placeholder="Enter Contact Number" type="number" onChange={props.onChange} />
        <FormButton title="Register" handleSubmit={props.handleSubmit} />
    </div>
);


const FormButton = (props: { handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => {


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

const FormInput = (props: { description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; type: string | (string & {}) | undefined; name: string | undefined; placeholder: string | undefined; onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; }) => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
    </div>
);

export default LoginForm;