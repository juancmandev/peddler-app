interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ children, onSubmit }: FormProps) => (
  <form
    onSubmit={onSubmit}
    className='max-w-[300px] my-4 mx-auto flex flex-col gap-2'>
    {children}
  </form>
);

export const FormSection = ({ children }: { children: React.ReactNode }) => (
  <section className='flex flex-col gap-1'>{children}</section>
);

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  onError: string | false | undefined;
}

export const Label = ({ children, htmlFor, onError }: LabelProps) => (
  <label
    htmlFor={htmlFor}
    className={`text-lg font-bold ${onError && 'text-red-500'}`}>
    {children}
  </label>
);
