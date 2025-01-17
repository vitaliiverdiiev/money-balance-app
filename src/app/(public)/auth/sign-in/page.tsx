import { auth, SignInWithGithubButton, SignOutButton } from "@/entities";

export default async function Page() {
  const session = await auth();

  return (
    <main>
      <div className="container">
        <h2>{session?.user?.name}</h2>
        {session ? <SignOutButton /> : <SignInWithGithubButton />}
      </div>
    </main>
  );
}
