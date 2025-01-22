import { signIn } from "@/entities";
import { Button, Icon } from "@/shared/ui";

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
