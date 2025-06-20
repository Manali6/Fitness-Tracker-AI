"use client"
import GoalTracker from './GoalTracker';
import Workout from './Workout';
import Nutrition from './Nutrition';
import Recommendations from './Recommendations';
import UserProfile from './UserProfile';
import React, { useState } from 'react';
import { FaRegUser, FaBullseye, FaUtensils, FaDumbbell, FaSignOutAlt, FaLightbulb } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const SideMenu = () => {
        const [selectedOption, setSelectedOption] = useState('goal');
        const router = useRouter();

        const handleOptionClick = (option: React.SetStateAction<string>) => {
                setSelectedOption(option);
        };
        const getMenuItems = () => {
                const items = [
                        {
                                id: 'profile',
                                icon:
                                        <FaRegUser />,
                                label: 'Profile'
                        },
                        {
                                id: 'goal',
                                icon: <FaBullseye />,
                                label: 'Goal Tracking'
                        },
                        {
                                id: 'workout',
                                icon: <FaDumbbell />,
                                label: 'Workout'
                        },
                        {
                                id: 'nutrition',
                                icon: <FaUtensils />,
                                label: 'Nutrition'
                        },
                        {
                                id: 'recommendation',
                                icon: <FaLightbulb />,
                                label: 'Recommendations'
                        },
                        {
                                id: 'logout',
                                icon: <FaSignOutAlt />,
                                label: 'Logout'
                        }
                ];

                return items.map(item => (
                        <li
                                key={item.id}
                                className={item.id === selectedOption ? 'selected' : item.id === 'logout' ? 'logout' : ''}
                                onClick={() => {
                                        if (item.id === 'logout') {
                                                router.push('/');
                                        } else {
                                                handleOptionClick(item.id);
                                        }
                                }}
                        >
                                {item.icon}
                                <span>{item.label}</span>
                        </li>
                ));
        };

        const renderSelectedComponent = () => {
                switch (selectedOption) {
                        case 'profile':
                                return <UserProfile />;
                        case 'goal':
                                return <GoalTracker />;
                        case 'nutrition':
                                return <Nutrition />;
                        case 'workout':
                                return <Workout />;
                        case 'recommendation':
                                return <Recommendations />
                        default:
                                return null;
                }
        };

        return (
                <div className="dashboard-components">
                        <div className="side-menu">
                                <ul>
                                        {getMenuItems()}
                                </ul>
                        </div>
                        {renderSelectedComponent()}
                </div>
        );
}

export default SideMenu;