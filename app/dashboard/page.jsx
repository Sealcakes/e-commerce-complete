import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";


const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login?callbackUrl=/dashboard')
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <h2>This page should be protected</h2>
      <h2>You are currently logged in as:</h2>
      <p>{session?.user?.name}</p>
    </div>
  )
}
export default ServerProtectedPage;
