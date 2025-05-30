"use client"

import React, { useState, useEffect } from 'react';
import Chart from './Chart';

const Recommendations = () => {
    const user = "";
    const username = "";
    const [balancedRecommendations, setBalancedRecommendations] = useState([]);
    const [proteinRecommendations, setProteinRecommendations] = useState([]);
    const [carbsRecommendations, setCarbsRecommendations] = useState([]);
    const [calorieRecommendations, setCalorieRecommendations] = useState([]);
    const [fatRecommendations, setFatRecommendations] = useState([]);

    return (
        <div className="workout-container">
            <h3 className="intake">Ideal Calorie Intake: {calorieRecommendations}</h3>

            <div className="recommendation-table-display">
                <table className="recommendation-table">
                    <h3>Balanced Recommendations</h3>
                    <tbody>
                        {balancedRecommendations.map((recommendation, index) => (
                            <tr key={index}>
                                <td><a href={recommendation.url}>{recommendation.label}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table className="recommendation-table">
                    <h3>High Protein Recommendations</h3>
                    <tbody>
                        {proteinRecommendations.map((recommendation, index) => (
                            <tr key={index}>
                                <td><a href={recommendation.url}>{recommendation.label}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="recommendation-table-display">
                <table className="recommendation-table">
                    <h3>Low carbs Recommendations</h3>
                    <tbody>
                        {carbsRecommendations.map((recommendation, index) => (
                            <tr key={index}>
                                <td><a href={recommendation.url}>{recommendation.label}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table className="recommendation-table">
                    <h3>Low Fat Recommendations</h3>
                    <tbody>
                        {fatRecommendations.map((recommendation, index) => (
                            <tr key={index}>
                                <td><a href={recommendation.url}>{recommendation.label}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Recommendations;