import Form from "next/form";
import { ProfileImage } from "./ProfileImage";

const MIN_LENGTH_TEXT = 2;
const MAX_LENGTH_TEXT = 50;

export default function Register() {
  return (
    <div className="bg-blue-100 h-screen ">
      <main className="flex flex-col items-center justify-center bg-red-50 h-full gap-8 p-8">
        <ProfileImage size={300} />

        <Form
          action={"/friends"}
          formMethod="post"
          className={"flex flex-col gap-4 w-80"}
        >
          <InputField id="name" label="Name" required type={"text"} />
          <InputField id="age" label="Age" required type={"number"} />
          <InputField id="breed" label="Breed" type={"text"} />

          <button type="submit" className="bg-violet-100 h-8 rounded-lg">
            Submit
          </button>
        </Form>
      </main>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  id: string;
  required?: boolean;
  type: "text" | "number";
}
const InputField = ({ id, label, required = false, type }: InputFieldProps) => {
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

const TextInput = ({
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
      className="h-8 rounded-lg"
    />
  );
};

const NumberInput = ({
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
      className="h-8 rounded-lg"
    />
  );
};
