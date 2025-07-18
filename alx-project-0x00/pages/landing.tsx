import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Button title="Small" className="bg-blue-500 text-sm rounded-sm" />
      <Button title="Medium" className="bg-green-500 text-base rounded-md" />
      <Button title="Large" className="bg-red-500 text-lg rounded-full" />
    </div>
  )
}
export default Landing