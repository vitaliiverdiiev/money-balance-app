import { Button, Icon } from "@/shared/ui";
import { signIn } from "../auth";

export const SignInWithGithubButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" variant="ghost">
        <Icon icon="github" />
        <span>Sign in with GitHub</span>
      </Button>
    </form>
  );
};
