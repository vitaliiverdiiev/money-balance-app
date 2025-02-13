import { signIn } from "@/entities";
import { Button, Icon } from "@/shared/ui";

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
