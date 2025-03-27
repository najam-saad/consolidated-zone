'use client';

import { useState } from 'react';
import { Task } from '../app/page';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li 
          key={task.id}
          className={`relative overflow-hidden transition-all duration-300 ${
            hoverIndex === index ? 'scale-[1.01]' : ''
          }`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div className={`group p-4 rounded-xl bg-glass backdrop-blur-sm border border-violet-900/30 flex items-center justify-between transition-all ${
            hoverIndex === index ? 'neon-border' : ''
          }`}>
            {/* Task content */}
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <button
                onClick={() => onToggle(task.id)}
                className={`relative flex items-center justify-center w-5 h-5 rounded-full border transition-all ${
                  task.completed 
                    ? 'bg-primary border-primary' 
                    : 'border-gray-500 hover:border-secondary'
                }`}
              >
                {task.completed && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${
                  task.completed 
                    ? 'text-gray-500 line-through' 
                    : 'text-white'
                }`}>
                  {task.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Added {formatDate(task.createdAt)}
                </p>
              </div>
            </div>
            
            {/* Delete button */}
            <button
              onClick={() => onDelete(task.id)}
              className="ml-2 text-gray-500 hover:text-secondary transition-colors p-1 opacity-0 group-hover:opacity-100"
              aria-label="Delete task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          
          {/* Decorative highlight on hover */}
          {hoverIndex === index && (
            <div className="absolute inset-0 -z-10 opacity-10">
              <div className="absolute top-0 left-0 h-full w-1 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-secondary to-transparent"></div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
} 