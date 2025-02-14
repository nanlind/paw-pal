const MIN_LENGTH_TEXT = 2;
const MAX_LENGTH_TEXT = 50;

export interface InputFieldProps {
  label: string;
  id: string;
  required?: boolean;
  type: "text" | "number";
}
export const InputField = ({
  id,
  label,
  required = false,
  type,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>
        {label} {required ? "(required)" : "(optional)"}
      </label>
      {type === "text" ? (
        <TextInput id={id} required={required} />
      ) : (
        <NumberInput id={id} required={required} />
      )}
    </div>
  );
};

export const TextInput = ({
  id,
  required = false,
}: Omit<InputFieldProps, "type" | "label">) => {
  return (
    <input
      id={id}
      name={id}
      minLength={MIN_LENGTH_TEXT}
      maxLength={MAX_LENGTH_TEXT}
      required={required}
      type={"text"}
      className="h-8 rounded-lg bg-yellow-100/50 border-2 border-orange-300 p-2"
    />
  );
};

export const NumberInput = ({
  id,
  required = false,
}: Omit<InputFieldProps, "type" | "label">) => {
  return (
    <input
      id={id}
      name={id}
      pattern="^[0-9]{1,2}$"
      title="The age should be between 0 and 100."
      required={required}
      type={"number"}
      className="h-8 rounded-lg bg-yellow-100/50 border-2 border-orange-300 p-2"
    />
  );
};
