import { useState } from 'preact/hooks';
import { Timeforrm } from '@/components/ui/Timeforrm';
import { TimeChart } from '@/components/ui/TimeChart';

export const Home = () => {
  const [data, setData] = useState<{activity: string, hour: number}[]>([]);

  const handleAdd = (activity: string, hour: number) => {
    setData((prev) => [...prev, { activity, hour }]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-[url('/bg.svg')] bg-cover">
        <h1 className="text-2xl font-bold mb-4">Time tracker</h1>
        <Timeforrm onAdd={handleAdd}/>

        {data.length > 0 && (
          <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Time Distribution</h2>
            <TimeChart data={data} />
          </div>
        )}

        {data.length > 0 && (
          <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Activity Summary</h2>
            <div className="space-y-2">
              {data.map((item, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-100 rounded">
                  <span>{item.activity}</span>
                  <span className="font-semibold">{item.hour} hours</span>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};
