"use client"

import React, { useState } from 'react';

const UserProfile = () => {
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const user = { username: 'Admin', email: '', contactNumber: '' };

        const handlePasswordUpdate = (e) => {
                e.preventDefault();
                if (password === confirmPassword) {
<<<<<<< HEAD
                        // Handle password update logic here
=======
>>>>>>> 720011f (Formatted Code)
                        alert('Password updated successfully');
                } else {
                        alert('Passwords do not match');
                }
        };

        return (
                <div className="user-profile-container">
<<<<<<< HEAD
                        <div class="user-profile-circle">{user?.username.slice(0, 1).toUpperCase()}</div>
=======
                        <div className="user-profile-circle">{user?.username.slice(0, 1).toUpperCase()}</div>
>>>>>>> 720011f (Formatted Code)
                        <p data-testid="user-name">{user?.username}</p>
                        <p data-testid="user-email">{user?.email}</p>
                        <p data-testid="user-contact-number">{user?.contactNumber}</p>

                        <h3>Update Password</h3>
                        <form className="update-password-form" onSubmit={handlePasswordUpdate}>
<<<<<<< HEAD
                                <div class="row">
=======
                                <div className="row">
>>>>>>> 720011f (Formatted Code)
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