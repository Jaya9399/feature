import React from "react";
import { Bot } from "lucide-react";

const insights = [
    {
        title: "Feature Priority Suggestion",
        content: "Based on user feedback and market trends, consider prioritizing the 'Team Collaboration' feature in the next sprint.",
    },
    {
        title: "Resource Optimization",
        content: "Current team velocity suggests adding one more developer would optimize delivery timeline.",
    },
];

const AiInsights = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">AI Insights</h2>
                <a href="/" className="text-purple-500 text-lg hover:underline">
                    View All
                </a>
            </div>
            <ul className="space-y-4">
                {insights.map((insight, index) => (
                    <li key={index} className="p-4 bg-gray-50 rounded-md flex items-start gap-3">
                        <Bot className="text-purple-500 w-5 h-5 mt-1" />
                        <div>
                            <h3 className="font-medium text-gray-800">{insight.title}</h3>
                            <p className="text-sm text-gray-600">{insight.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AiInsights;
