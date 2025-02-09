import React from "react";
import icon from "../images/icon.png";

const ExecutionFlow = () => {
    const tasks = [
        { name: "Pre-Sales Request", assignee: "Williams Harris", status: "Feature requirement submitted", progress: 100 },
        { name: "AI Analysis", assignee: "Agent - Mod 2", status: "Task allocation & planning", progress: 100 },
        { name: "UX Design", assignee: "Alex Chen", status: "Basic UX Design", progress: 100 },
        { name: "Feature UX Research", assignee: "Agent - Mod 1", status: "Basic UX Research", progress: 100 },
        { name: "PM Agent", assignee: "Agent - Mod 1", status: "Elaborate Requirements", progress: 100 },
        { name: "UI AI Agent", assignee: "Agent - Mod 2", status: "UI Based on UX", progress: 70 },
        { name: "Frontend Dev", assignee: "Pending", status: "", progress: 30 },
        { name: "Backend Dev", assignee: "Pending", status: "", progress: 45 },
        { name: "AI Assistance", assignee: "Active", status: "", progress: 0 },
        { name: "Testing", assignee: "Not Started", status: "", progress: 0 },
        { name: "Completion", assignee: "Pending", status: "", progress: 10 },
    ];

    // Function to group tasks in a 2-3 alternating row layout
    const groupedTasks = [];
    let i = 0;

    while (i < tasks.length) {
        if (groupedTasks.length % 2 === 0) {
            // Odd rows → 2 columns
            groupedTasks.push(tasks.slice(i, i + 2));
            i += 2;
        } else {
            // Even rows → 3 columns
            groupedTasks.push(tasks.slice(i, i + 3));
            i += 3;
        }
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full flex flex-col ">
            <div className="flex align-middle">
                <img src={icon} alt="Flow Icon" className="h-5 w-9" />
                <h2 className="text-lg font-semibold mb-6">Execution Flow</h2>
            </div>
            <div className="w-full max-w-4xl flex flex-col gap-y-6">
                {groupedTasks.map((row, rowIndex) => (
                    <div key={rowIndex} className={`flex justify-center items-center gap-6`}>
                        {row.map((task, index) => (
                            <React.Fragment key={index}>
                                <div className="p-5 border rounded-xl shadow-lg bg-white text-gray-800 text-sm text-center w-48">
                                    <h3 className="text-base font-semibold">{task.name}</h3>
                                    <p className="text-sm text-purple-500 font-bold">{task.assignee}</p>
                                    <p className="text-xs text-gray-600">{task.status}</p>

                                    {/* Hide progress bar for the first two tasks */}
                                    {!(rowIndex === 0 && index < 2) && (
                                        <div className="w-full bg-gray-200 rounded-full h-1 mt-3">
                                            <div className="bg-purple-500 h-1 rounded-full" style={{ width: `${task.progress}%` }}></div>
                                        </div>
                                    )}
                                </div>

                                {/* Add right arrow (→) between tasks in the same row */}
                                {index < row.length - 1 && (
                                    <span className="text-4xl text-orange-500">→</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExecutionFlow;
