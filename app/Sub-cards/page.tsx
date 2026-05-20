import Badge from "./_components/badge";
import Button from "./_components/button";
import Card from "./_components/cards";

export default function CardPage() {
  return (
    <div className="bg-pink-200 flex gap-2 justify-center items-center text-gray-800 h-screen">
      <Card
        color="bg-blue-200"
        title="Web Design"
        description="web design friendly"
        type="Explore"
      />
      <Card
        color="bg-green-200"
        title="UI/UX Design"
        description="user-friendly interfaces"
        type="Explore"
      />
      <Card
        color="bg-yellow-200"
        title="Digital Marketing"
        description="strategies for online growth"
        type="Learn"
      />
    </div>
  );
}