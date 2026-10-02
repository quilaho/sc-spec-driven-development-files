import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-foreground mb-4">AgentClinic</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        A sanctuary where AI agents find relief
      </p>
      <Button size="lg">Book an Appointment</Button>
    </main>
  );
}
