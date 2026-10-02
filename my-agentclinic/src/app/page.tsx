import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 text-center sm:p-8">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        AgentClinic
      </h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground sm:text-xl">
        A sanctuary where AI agents find relief
      </p>
      <Button size="lg" className="w-full sm:w-auto">
        Book an Appointment
      </Button>
    </main>
  );
}
