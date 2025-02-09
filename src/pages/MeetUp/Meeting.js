import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { GripVertical } from "lucide-react";

const initialAgenda = [
    { topic: "Project Status Update", priority: "High" },
    { topic: "UI Design Review", priority: "Medium" },
    { topic: "Technical Challenges", priority: "Low" },
];

const initialGoals = [
    { description: "Finalize UI design for new feature", completed: true },
    { description: "Approve user flow diagrams", completed: false },
];

const DraggableItem = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const style = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50 cursor-move"
        >
            {children}
        </div>
    );
};

const DroppableArea = ({ id, children, onDrop }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
        <div ref={setNodeRef} className="space-y-4" onDrop={onDrop}>
            {children}
        </div>
    );
};

const Meeting = () => {
    const [agenda, setAgenda] = useState(initialAgenda);
    const [goals, setGoals] = useState(initialGoals);

    const handleGoalToggle = (index) => {
        const updatedGoals = goals.map((goal, i) =>
            i === index ? { ...goal, completed: !goal.completed } : goal
        );
        setGoals(updatedGoals);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = agenda.findIndex((item) => item.topic === active.id);
            const newIndex = agenda.findIndex((item) => item.topic === over?.id);

            if (newIndex !== -1) {
                const updatedAgenda = [...agenda];
                const [movedItem] = updatedAgenda.splice(oldIndex, 1);
                updatedAgenda.splice(newIndex, 0, movedItem);
                setAgenda(updatedAgenda);
            }
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="space-y-6">
                {/* Meeting Agenda */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="font-bold text-xl text-gray-800 mb-6">
                        Meeting Agenda
                    </h2>
                    <DroppableArea id="agenda">
                        {agenda.map((item) => (
                            <DraggableItem key={item.topic} id={item.topic}>
                                <span className="flex text-gray-700 font-medium items-center">
                                    <GripVertical className="w-4 h-4 mr-2" />
                                    {item.topic}
                                </span>
                                <span
                                    className={`text-sm font-bold ${
                                        item.priority === "High"
                                            ? "text-red-600"
                                            : item.priority === "Medium"
                                            ? "text-yellow-500"
                                            : "text-green-500"
                                    }`}
                                >
                                    {item.priority}
                                </span>
                            </DraggableItem>
                        ))}
                    </DroppableArea>
                    <button className="mt-6 w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100">
                        Add Agenda Item
                    </button>
                </div>

                {/* Goals & Milestones */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="font-bold text-xl text-gray-800 mb-6">
                        Goals & Milestones
                    </h2>
                    <div className="space-y-4">
                        {goals.map((goal, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50"
                            >
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                        checked={goal.completed}
                                        onChange={() => handleGoalToggle(index)}
                                    />
                                    <span
                                        className={`text-gray-700 ${
                                            goal.completed
                                                ? "line-through text-gray-400"
                                                : "font-medium"
                                        }`}
                                    >
                                        {goal.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DndContext>
    );
};

export default Meeting;
