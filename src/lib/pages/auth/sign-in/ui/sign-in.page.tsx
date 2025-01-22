// import { auth, SignInWithGithubButton, SignOutButton } from "@/entities";

import { SignInWidget } from "@/widgets";

export const SignInPage = async () => {
  // const session = await auth();

  return (
    <div className="container h-full flex-center">
      <SignInWidget />
    </div>
  );
};
