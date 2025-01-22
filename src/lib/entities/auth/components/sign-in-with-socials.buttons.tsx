import { SignInWithGithubButton } from "./sign-in-with-github.button";
import { SignInWithGoogleButton } from "./sign-in-with-google.button";

export const SignInWithSocialButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <SignInWithGoogleButton />
      <SignInWithGithubButton />
    </div>
  );
};
