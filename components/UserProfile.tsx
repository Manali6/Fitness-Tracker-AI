"use client"

import React, { useState } from 'react';

const UserProfile = () => {
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const user = { username: 'Admin', email: '', contactNumber: '' };

        const handlePasswordUpdate = (e: { preventDefault: () => void; }) => {
                e.preventDefault();
                if (password === confirmPassword) {
                        alert('Password updated successfully');
                } else {
                        alert('Passwords do not match');
                }
        };

        return (
                <div className="user-profile-container">
                        <div className="user-profile-circle">{user?.username.slice(0, 1).toUpperCase()}</div>
                        <p data-testid="user-name">{user?.username}</p>
                        <p data-testid="user-email">{user?.email}</p>
                        <p data-testid="user-contact-number">{user?.contactNumber}</p>

                        <h3>Update Password</h3>
                        <form className="update-password-form" onSubmit={handlePasswordUpdate}>
                                <div className="row">
                                        <label htmlFor="password">New Password:</label>
                                        <input
                                                id="password"
                                                type="password"
                                                placeholder="Enter Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                        />

                                </div>
                                <div className="row">

                                        <label htmlFor="confirmPassword">Confirm New Password:</label>
                                        <input
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Enter Password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                </div>

                                <button type="submit">Update Password</button>
                        </form>
                </div>
        );
};

export default UserProfile;