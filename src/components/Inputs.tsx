interface InputProps {
  id: string;
  type: 'text' | 'password' | 'email';
  onError: string | undefined;
  onTouched: boolean | undefined;
  placeholder?: string;
  iconChildren?: React.ReactNode;
  value: React.HTMLInputTypeAttribute;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  type,
  onError,
  onTouched,
  placeholder,
  value,
  onBlur,
  onChange,
  iconChildren,
}: InputProps) => (
  <>
    <div
      className={`flex gap-1 border-2 border-gray-300 rounded-md p-2 ${
        onTouched && onError ? 'border-red-400' : 'border-gray-300'
      }`}>
      <input
        className='w-full focus:outline-none rounded-md p-1'
        id={id}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {iconChildren}
    </div>
    <span className='text-red-400 empty:before:inline-block empty:before:content-[""]'>
      {onTouched && onError && onError}
    </span>
  </>
);
