import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#E74C3C"];

const RevenuePieChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/manager/stats") 
            .then((response) => {
                const revenueData = response.data.revenueBreakdown.map((event, index) => ({
                    name: event.event_name,
                    value: parseFloat(event.total_revenue), // Ensure numeric values
                    color: COLORS[index % COLORS.length] // Assign colors dynamically
                }));
                setData(revenueData);
            })
            .catch((error) => {
                console.error("Error fetching revenue data:", error);
            });
    }, []);

    return (
        <div className="chart-container" >
            <h5 className="text-center" style={{ color: "#ffffff" }}>Total Revenue Overview</h5>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: Rs.${value}`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip 
                    formatter={(value) => `Rs.${value}`} 
                    contentStyle={{ backgroundColor: "#ffffff", color: "#fff" }} />
                    <Legend wrapperStyle={{ color: "#ffffff" }}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenuePieChart;
