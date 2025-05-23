"use client"

import React, { useState, useEffect } from 'react';
        import Chart from './Chart';

        const Workout = () => {
        const user = "";
        const username = "";
        const [total_steps, setTotalSteps] = useState('');
        const [calories_spent, setCaloriesSpent] = useState('');
        const [weight_measured, setWeight] = useState('');
        const [date, setCurrentDate] = useState(new Date().toLocaleDateString('en-CA'));
        //const [stepsData, setStepsData] = useState('');
        //const [caloriesData, setCaloriesData] = useState('');
        //const [weightData, setWeightData] = useState('');

        const stepsData = [
        { date: '2025-05-01', steps: 7200, target_steps: 10000 },
        { date: '2025-05-02', steps: 8500, target_steps: 10000 },
        { date: '2025-05-03', steps: 10200, target_steps: 10000 },
        { date: '2025-05-04', steps: 9300, target_steps: 10000 },
        { date: '2025-05-05', steps: 11000, target_steps: 10000 },
        { date: '2025-05-06', steps: 7800, target_steps: 10000 },
        { date: '2025-05-07', steps: 6400, target_steps: 10000 },
        ];

        const caloriesData = [
        { date: '2025-05-01', calories: 400, target_calories: 500 },
        { date: '2025-05-02', calories: 520, target_calories: 500 },
        { date: '2025-05-03', calories: 480, target_calories: 500 },
        { date: '2025-05-04', calories: 450, target_calories: 500 },
        { date: '2025-05-05', calories: 600, target_calories: 500 },
        { date: '2025-05-06', calories: 390, target_calories: 500 },
        { date: '2025-05-07', calories: 510, target_calories: 500 },
        ];

        const weightData = [
        { date: '2025-05-01', weight: 72.5, target_weight: 70.0 },
        { date: '2025-05-02', weight: 72.4, target_weight: 70.0 },
        { date: '2025-05-03', weight: 72.2, target_weight: 70.0 },
        { date: '2025-05-04', weight: 72.0, target_weight: 70.0 },
        { date: '2025-05-05', weight: 71.8, target_weight: 70.0 },
        { date: '2025-05-06', weight: 71.7, target_weight: 70.0 },
        { date: '2025-05-07', weight: 71.5, target_weight: 70.0 },
        ];

        const stepsTrackingChartData = {
        data: stepsData,
        xAxisDataKey: "date",
        barChartDataKey: "steps",
        barChartName: "Steps",
        lineChartDataKey: "target_steps",
        lineChartName: "Target Steps"
        };
        const caloriesTrackingChartData = {
        data: caloriesData,
        xAxisDataKey: "date",
        barChartDataKey: "calories",
        barChartName: "Calories",
        lineChartDataKey: "target_calories",
        lineChartName: "Target Calories to Burn"
        };
        const weightTrackingChartData = {
        data: weightData,
        xAxisDataKey: "date",
        barChartDataKey: "weight",
        barChartName: "Weight (kg)",
        lineChartDataKey: "target_weight",
        lineChartName: "Target Weight"
        };



        return (
<div className="workout-container">
    <h2>Enter Today's Workout Details </h2>
    <form className="workout-form" onSubmit="">
    <div class="row">
        <label htmlFor="total_steps">Total Steps:</label>
        <input
                id="total_steps"
                placeholder="Enter Steps"
                type="number"
                value={total_steps}
        onChange={(e) => setTotalSteps(e.target.value)}
        />
    </div>

    <div class="row">
        <label htmlFor="calories_spent">Calories Spent:</label>
        <input
                id="calories_spent"
                placeholder="Enter Calories"
                type="number"
                value={calories_spent}
        onChange={(e) => setCaloriesSpent(e.target.value)}
        />
    </div>

    <div class="row">
        <label htmlFor="weight_measured">Weight:</label>
        <input
                id="weight_measured"
                placeholder="Enter Weight"
                type="number"
                value={weight_measured}
        onChange={(e) => setWeight(e.target.value)}
        />
    </div>
    <button type="submit">Submit</button>
</form>

<div class="chart-grid">
<Chart label="Steps Tracking" data={stepsTrackingChartData} />
<Chart label="Calories Burnt Tracking" data={caloriesTrackingChartData} />
<Chart label="Weight Tracking" data={weightTrackingChartData} />
</div>

        </div>
        );
        };

        export default Workout;