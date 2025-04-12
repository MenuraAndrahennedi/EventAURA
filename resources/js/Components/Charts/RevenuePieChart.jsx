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
                    name: event.event_name.length > 25 ? event.event_name.slice(0, 22) + "..." : event.event_name,
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
        <div className="chart-container" style={{ backgroundColor: "#2c3e50", padding: 20, borderRadius: 10,width:"500px",margin:"o auto" }} >
            <h5 className="text-center" style={{ color: "#ffffff" }}>Total Revenue Overview</h5>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                       
                        dataKey="value"
                        labelLine={false}
                        label={ false }
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip 
                    formatter={(value,name) => [`Rs.${value}`,name]} 
                    contentStyle={{ backgroundColor: "#ffffff", color: "#fff" }} />
                    <Legend
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right" 
                    wrapperStyle={{ color: "#ffffff", maxHeight: 250, overflowY: "auto" }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenuePieChart;
