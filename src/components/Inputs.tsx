interface InputProps {
  id: string;
  type: 'text' | 'password' | 'email';
  onError: string | undefined;
  onTouched: boolean | undefined;
  placeholder?: string;
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
}: InputProps) => (
  <>
    <input
      id={id}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-2 border-gray-300 rounded-md p-2 ${
        onTouched && onError ? 'border-red-400' : 'border-gray-300'
      }`}
    />
    <span className='text-red-400 empty:before:inline-block empty:before:content-[""]'>
      {onTouched && onError && onError}
    </span>
  </>
);
