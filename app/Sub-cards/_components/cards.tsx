import Badge from "./badge";
import Button from "./button";

export default function Card({
  title,
  description,
  type,
  color = "bg-blue-100",
  badge = [],
}: {
  title: string;
  description: string;
  type: string;
  color?: string;
  badge?: string[];
}) {
  return (
    <div className="p-2 bg-gray-50 rounded-2xl">
      <div className={`${color} flex flex-col gap-3 w-72 h-auto p-4 rounded-2xl`}>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {badge.map((b, index) => (
            <Badge key={index} name={b} />
          ))}
          <Badge name="Web Apps" />
          <Badge name="Blog Posts" />
          <div className="Video Scripts" />
          <Badge name="Sales Pages" />
          <Badge name="Slogans" />
          <Badge name="Social Media" />
          <Badge name="Email Campaigns" />
        </div>
      </div>
      <div className="flex justify-between p-4 items-center">
        <h2 className="font-bold">{type}</h2>
        <Button />
      </div>
    </div>
  );
}