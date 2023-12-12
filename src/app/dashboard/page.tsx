import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <h1>Dashboard Page</h1>
    </main>
  );
}
