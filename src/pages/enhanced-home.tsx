import { useState } from 'preact/hooks';
import { EnhancedTimeChart } from '@/components/ui/EnhancedTimeChart';

export const EnhancedHome = () => {
  const [data, setData] = useState<{activity: string, hour: number}[]>([]);

  const handleAdd = (activity: string, hour: number) => {
    setData((prev) => [...prev, { activity, hour }]);
  };

  const activityIcons: { [key: string]: string } = {
    'sleep': '😴',
    'work': '💼',
    'exercise': '🏃',
    'study': '📚',
    'gaming': '🎮',
    'reading': '📖',
    'cooking': '👨‍🍳',
    'social': '👥',
    'default': '⏰'
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 mb-8 animate-fade-in-up">
          <div className="flex justify-center items-center mb-4">
           <h1 className="text-4xl font-bold title-gradient">
              Time Tracker
            </h1>
          </div>
          <p className="text-center text-gray-600 mb-6">
            Track your activities with beautiful pastel charts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activity
              </label>
              <input 
                type="text"
                placeholder="e.g., sleep, work, exercise"
                className="w-full form-input"
                id="activity-input"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hours
              </label>
              <input 
                type="number"
                placeholder="0-24"
                min="0"
                max="24"
                className="w-full form-input"
                id="hours-input"
              />
            </div>
          </div>
          
          <button 
            className="w-full gradient-button mt-4"
            onClick={() => {
              const activity = (document.getElementById('activity-input') as HTMLInputElement).value;
              const hours = parseInt((document.getElementById('hours-input') as HTMLInputElement).value);
              
              if (activity && hours > 0) {
                handleAdd(activity, hours);
                (document.getElementById('activity-input') as HTMLInputElement).value = '';
                (document.getElementById('hours-input') as HTMLInputElement).value = '';
              }
            }}
          >
            Add Activity
          </button>
        </div>

        {data.length > 0 && (
          <>
            <div className="glass-card p-6 mb-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Time Distribution
              </h2>
              <EnhancedTimeChart data={data} />
            </div>

            <div className="glass-card p-6 animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Activity Summary
              </h2>
              <div className="space-y-3">
                {data.map((item, index) => (
                  <div key={index} className="activity-row">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">
                          {activityIcons[item.activity.toLowerCase()] || activityIcons['default']}
                        </span>
                        <span className="font-medium">{item.activity}</span>
                      </div>
                      <span className="font-bold text-lg">
                        {item.hour} hours
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
