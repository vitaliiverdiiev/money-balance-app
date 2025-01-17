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
      <Button type="submit">
        <Icon icon="github" />
        <span>Signin with GitHub</span>
      </Button>
    </form>
  );
};
