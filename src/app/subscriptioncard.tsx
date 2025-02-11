import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Content = {
  title: string;
  desc: string;
  fee: number;
  features: string;
}

export default function SubscriptionCard({title = "1", desc = "1", fee = 1, features = "1"}: Content) {
  return (
    <Card className="w-60">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>${fee}/month</p>
      </CardContent>
      <CardFooter>
        <p>
          {features}
        </p>
      </CardFooter>
    </Card>
  );
}
