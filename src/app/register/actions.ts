"use server";

export interface User {
  name: string | undefined;
  age: number | undefined;
  breed: string | undefined;
}
export async function printTextAction(
  _previousState: { user: User },
  formData: FormData
) {
  const name = formData.get("name")?.toString();
  const ageFormData = formData.get("age");
  const age = ageFormData ? parseInt(ageFormData.toString()) : undefined;
  const breed = formData.get("breed")?.toString();

  return {
    user: { name, age, breed },
    errors: {
      //   name: nameValidator(name as string) ? undefined : "Name is required",
    },
  };
}

// function nameValidator(name: string | null) {
//   return name && name.trim().length > 0;
// }
