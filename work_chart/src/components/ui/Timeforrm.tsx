import { useState } from 'preact/hooks'

interface Props {
  onAdd: (activity: string, hour: number) => void;
}

export const Timeforrm = ({onAdd}: Props) => {
  const [activity, setActivity] = useState<string>("");
  const [hour, setHour] = useState<string>("");

  const handleSubmit = () => {
    if (!activity || !hour) {
      alert("Please fill in all fields");
      return;
    }
    
    const hourNumber = parseInt(hour, 10);
    if (isNaN(hourNumber)) {
      alert("Please enter a valid number for hours");
      return;
    }
    
    onAdd(activity, hourNumber);
    
    // Reset form
    setActivity("");
    setHour("");
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <input 
        placeholder="Activity: eg: sleep"
        value={activity}
        onChange={(e) => setActivity((e.target as HTMLInputElement).value)}
        className="px-3 py-2 border rounded-md"
      />
      <input 
        placeholder="Hours: eg: 8"
        type="number"
        value={hour}
        onChange={(e) => setHour((e.target as HTMLInputElement).value)}
        className="px-3 py-2 border rounded-md"
      />
      <button 
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Add Activity
      </button>
    </div>
  );
};
