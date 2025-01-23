import { Button, Icon } from "@/shared/ui";
import { signIn } from "../auth";

export const SignInWithGoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit" variant="ghost">
        <Icon icon="google" />
        <span>Sign in with Google</span>
      </Button>
    </form>
  );
};
