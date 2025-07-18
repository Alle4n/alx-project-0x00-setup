import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 rounded-lg bg-gray-100">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <div className="flex gap-4 mb-6">
        <Card />
        <Card />
      </div>

      <div className="flex gap-3">
        <Button title="Small Button" className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm" />
        <Button title="Medium Button" className="bg-green-600 text-white text-base px-5 py-2 rounded-md" />
        <Button title="Large Button" className="bg-red-600 text-white text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
