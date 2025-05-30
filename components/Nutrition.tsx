"use client"

import React, { useState, useEffect } from 'react';
import Chart from './Chart';

const Nutrition = () => {
        const user = "";
        const username = "";
        const [calorie_intake, setCalorieIntake] = useState('');
        const [protein, setProteins] = useState('');
        const [carbs, setCarbs] = useState('');
        const [fat, setFat] = useState('');
        const [water_intake, setWater] = useState('');
        const [date, setCurrentDate] = useState(new Date().toLocaleDateString('en-CA'));
        //const [proteinIntakeData, setProteinIntakeData] = useState('');
        //const [carbsIntakeData, setCarbsIntakeData] = useState('');
        //const [fatIntakeData, setFatIntakeData] = useState('');

        const proteinIntakeData = [
                { date: '2025-05-01', protein_intake: 28, target_protein: 30 },
                { date: '2025-05-02', protein_intake: 31, target_protein: 30 },
                { date: '2025-05-03', protein_intake: 29, target_protein: 30 },
                { date: '2025-05-04', protein_intake: 30, target_protein: 30 },
                { date: '2025-05-05', protein_intake: 32, target_protein: 30 },
                { date: '2025-05-06', protein_intake: 27, target_protein: 30 },
                { date: '2025-05-07', protein_intake: 30, target_protein: 30 },
        ];

        const carbsIntakeData = [
                { date: '2025-05-01', carbs_intake: 52, target_carbs: 50 },
                { date: '2025-05-02', carbs_intake: 49, target_carbs: 50 },
                { date: '2025-05-03', carbs_intake: 50, target_carbs: 50 },
                { date: '2025-05-04', carbs_intake: 48, target_carbs: 50 },
                { date: '2025-05-05', carbs_intake: 53, target_carbs: 50 },
                { date: '2025-05-06', carbs_intake: 47, target_carbs: 50 },
                { date: '2025-05-07', carbs_intake: 50, target_carbs: 50 },
        ];

        const fatIntakeData = [
                { date: '2025-05-01', fat_intake: 20, target_fat: 20 },
                { date: '2025-05-02', fat_intake: 20, target_fat: 20 },
                { date: '2025-05-03', fat_intake: 21, target_fat: 20 },
                { date: '2025-05-04', fat_intake: 22, target_fat: 20 },
                { date: '2025-05-05', fat_intake: 18, target_fat: 20 },
                { date: '2025-05-06', fat_intake: 19, target_fat: 20 },
                { date: '2025-05-07', fat_intake: 20, target_fat: 20 },
        ];

        const proteinIntakeTrackingChartData = {
                data: proteinIntakeData,
                xAxisDataKey: "date",
                barChartDataKey: "protein_intake",
                barChartName: "Protein Intake (%)",
                lineChartDataKey: "target_protein",
                lineChartName: "Target Protein Intake"
        };
        const carbsIntakeTrackingChartData = {
                data: carbsIntakeData,
                xAxisDataKey: "date",
                barChartDataKey: "carbs_intake",
                barChartName: "Carbs (%)",
                lineChartDataKey: "target_carbs",
                lineChartName: "Target Carbs Intake"
        };
        const fatIntakeTrackingChartData = {
                data: fatIntakeData,
                xAxisDataKey: "date",
                barChartDataKey: "fat_intake",
                barChartName: "Fat (%)",
                lineChartDataKey: "target_fat",
                lineChartName: "Target Fat Intake"
        };



        return (
                <div className="nutrition-container">
                        <h2>Enter Today's Nutrition Details </h2>
                        <form className="nutrition-form">

                                <div className="row">
                                        <label htmlFor="protein">Protein(%):</label>
                                        <input
                                                id="protein"
                                                placeholder="Enter Protein"
                                                type="number"
                                                value={protein}
                                                onChange={(e) => setProteins(e.target.value)}
                                        />
                                </div>

                                <div className="row">
                                        <label htmlFor="carbs">Carbs(%):</label>
                                        <input
                                                id="carbs"
                                                placeholder="Enter Carbs"
                                                type="number"
                                                value={carbs}
                                                onChange={(e) => setCarbs(e.target.value)}
                                        />
                                </div>

                                <div className="row">
                                        <label htmlFor="fat">Fat(%):</label>
                                        <input
                                                id="fat"
                                                placeholder="Enter Fat"
                                                type="number"
                                                value={fat}
                                                onChange={(e) => setFat(e.target.value)}
                                        />
                                </div>


                                <button type="submit">Submit</button>
                        </form>

                        <div className="chart-grid">
                                <Chart label="Protein Tracking" data={proteinIntakeTrackingChartData} />
                                <Chart label="Carbs Tracking" data={carbsIntakeTrackingChartData} />
                                <Chart label="Fat Tracking" data={fatIntakeTrackingChartData} />
                        </div>

                </div>
        );
};

export default Nutrition;