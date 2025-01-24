import { SignUpForm } from "@/modules/auth/features/forms/sign-up.form";

export const SignUpPage = async () => {
  return (
    <main>
      <div className="container">
        <SignUpForm />
      </div>
    </main>
  );
};
