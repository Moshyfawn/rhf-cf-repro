import { useForm } from "react-hook-form";
import type { SubmitHandler, DefaultValues } from "react-hook-form";
import { NextPage } from "next";

interface FormValues {
  name: string;
}

const defaultValues: DefaultValues<FormValues> = {
  name: ""
};

const onSubmit: SubmitHandler<FormValues> = (data) => console.info(data);

export default function Home(props: NextPage) {
  const { register, handleSubmit } = useForm({
    defaultValues
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-2 flex flex-col gap-2 bg-cyan-900 h-screen"
    >
      <label htmlFor="name" className="block text-white">
        Name
      </label>
      <input
        {...register("name")}
        id="name"
        className="border-2 border-sky-500 rounded-lg p-1"
      />
      <button type="submit" className="self-start text-white">
        Submit
      </button>
    </form>
  );
}
