"use client";

import React, { useEffect, useState } from 'react';

const Recommendations = () => {
    const [balancedRecommendations, setBalancedRecommendations] = useState<string[]>([]);
    const [proteinRecommendations, setProteinRecommendations] = useState<string[]>([]);
    const [carbsRecommendations, setCarbsRecommendations] = useState<string[]>([]);
    const [fatRecommendations, setFatRecommendations] = useState<string[]>([]);
    const [calorieRecommendations, setCalorieRecommendations] = useState<string>("");

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const res = await fetch("/api/nutrition-recommendation", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        age: 25,
                        gender: "female",
                        goal: "maintain weight",
                        dietType: "vegetarian",
                        activityLevel: "moderate",
                    }),
                });

                const data = await res.json();
                const text = data.recommendation;
                console.log(text);

                const extractSection = (label: string) => {
                    const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(\\n\\w|$)`, "i");
                    const match = text.match(regex);
                    if (!match) return [];
                    return match[1]
                        .split('\n')
                        .map((line: string) => line.trim())
                        .filter((line: string) => line && line.startsWith('http'));
                };

                setBalancedRecommendations(extractSection("Balanced Recommendations"));
                setProteinRecommendations(extractSection("High Protein Recommendations"));
                setCarbsRecommendations(extractSection("Low Carbs Recommendations"));
                setFatRecommendations(extractSection("Low Fat Recommendations"));

                const calorieMatch = text.match(/Ideal Calorie Intake: (\d+)/i);
                if (calorieMatch) {
                    setCalorieRecommendations(calorieMatch[1]);
                }

            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };

        fetchRecommendations();
    }, []);

    const renderTable = (title: string, data: string[]) => (
        <div className="recommendation-table">
            <h3>{title}</h3>
            <table>
                <tbody>
                    {data.map((recommendation, index) => (
                        <tr key={index}>
                            <td>
                                <a href={recommendation} target="_blank" rel="noopener noreferrer">
                                    {recommendation}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="workout-container">
            <h3 className="intake">Ideal Calorie Intake: {calorieRecommendations}</h3>

            <div className="recommendation-table-display">
                {renderTable("Balanced Recommendations", balancedRecommendations)}
                {renderTable("High Protein Recommendations", proteinRecommendations)}
            </div>

            <div className="recommendation-table-display">
                {renderTable("Low Carbs Recommendations", carbsRecommendations)}
                {renderTable("Low Fat Recommendations", fatRecommendations)}
            </div>
        </div>
    );
};

export default Recommendations;
