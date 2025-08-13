import React from 'react';

/**
 * Displays a quest with its title, description and completion progress.
 * @param {Object} props
 * @param {string} props.title The name of the quest.
 * @param {string} props.description A short description of what the quest requires.
 * @param {number} props.progress A percentage from 0 to 100 indicating how much of the quest has been completed.
 */
function QuestCard({ title, description, progress }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <h3 className="text-xl font-semibold mb-1 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-3 text-sm">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-green-500 h-2"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-right text-xs text-gray-500">{progress}% complete</p>
    </div>
  );
}

export default QuestCard;