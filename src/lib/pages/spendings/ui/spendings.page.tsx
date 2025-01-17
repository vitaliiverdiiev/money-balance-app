import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { SpendingsForm } from "@/widgets";

export const SpendingsPage = () => {
  return (
    <main>
      <div className="container grid grid-cols-[1fr_400px]">
        <div>
          <h2>Spendings</h2>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Add spending</CardTitle>
            </CardHeader>
            <CardContent>
              <SpendingsForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};
