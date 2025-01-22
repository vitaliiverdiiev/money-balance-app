import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { SignInWithGithubButton, SignInWithGoogleButton } from "@/entities";
import { AlreadyHaveAccount } from "@/features";
import { SignInForm } from "./sign-in.form";

export const SignInWidget = () => {
  return (
    <Card className="max-w-[500px] m-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription className="text-md">
          Welcome back! Please sign in using your credentials or social account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <SignInForm />
        <AlreadyHaveAccount />
      </CardContent>
      <CardFooter className="flex flex-col gap-4 justify-center">
        <div className="form-or-divider">
          <span>OR</span>
        </div>
        <div className="flex items-center gap-4">
          <SignInWithGoogleButton />
          <SignInWithGithubButton />
        </div>
      </CardFooter>
    </Card>
  );
};
