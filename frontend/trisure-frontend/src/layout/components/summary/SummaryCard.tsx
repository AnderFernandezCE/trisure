import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shadcnComponents/ui/card"
export const SummaryCard = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>)
}