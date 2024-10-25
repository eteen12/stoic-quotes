import PhilosopherPage from "@/components/quotes/philosopherPage";
import philosophersData from "@/data/philosopherData";

// Example function to generate static paths
export async function generateStaticParams() {
  return Object.keys(philosophersData).map((key) => ({
    name: key,
  }));
}

export default async function Philosopher({ params }) {
  const { name } = await params;
  const philosopher = philosophersData[name];

  if (!philosopher) {
    return notFound();
  }

  return <PhilosopherPage philosopher={philosopher} />;
}
