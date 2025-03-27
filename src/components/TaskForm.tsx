'use client';

import { useState } from 'react';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative"
    >
      <div 
        className={`relative border transition-all duration-300 rounded-xl overflow-hidden bg-muted ${
          isInputFocused 
            ? 'neon-border shadow-lg' 
            : 'border-violet-900/30'
        }`}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="What needs to be done?"
          className="w-full bg-transparent px-4 py-3 text-white focus:outline-none"
          autoComplete="off"
        />
        
        <button
          type="submit"
          disabled={!title.trim()}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1.5 rounded-lg transition-all ${
            title.trim() 
              ? 'bg-secondary text-white hover:bg-secondary/90 neon-border' 
              : 'bg-muted text-gray-500 cursor-not-allowed'
          }`}
        >
          Add
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 w-full h-full blur-xl opacity-20 top-0 left-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-secondary rounded-full"></div>
      </div>
    </form>
  );
} 