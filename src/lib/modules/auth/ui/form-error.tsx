import { ExclamationMark } from "@phosphor-icons/react/dist/ssr";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationMark className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
