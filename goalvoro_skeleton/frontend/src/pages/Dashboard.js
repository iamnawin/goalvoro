import React from 'react';
import QuestCard from '../components/QuestCard';

/**
 * Dashboard page showing the user's active quests. In a real application
 * quests would be fetched from an API based on the user's role and progress.
 */
function Dashboard() {
  // Sample quests for demonstration purposes
  const quests = [
    {
      id: 1,
      title: 'Complete 10 Story Points',
      description: 'Finish assigned sprint tasks to build your code tower.',
      progress: 70,
    },
    {
      id: 2,
      title: 'Fix 5 Bugs',
      description: 'Squash bugs to earn your Bug Slayer badge.',
      progress: 40,
    },
    {
      id: 3,
      title: 'Review 3 Pull Requests',
      description: 'Help teammates improve code quality by reviewing PRs.',
      progress: 20,
    },
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Your Quests</h2>
      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          title={quest.title}
          description={quest.description}
          progress={quest.progress}
        />
      ))}
    </div>
  );
}

export default Dashboard;