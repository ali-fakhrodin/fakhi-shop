import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

function SingupForm() {
  const { isLoading, signup } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  console.log(errors);

  function onSubmit({ fullName, email, password }) {
    if (isLoading)
      return (
        <p className="text-red-900 text-3xl flex items-center justify-center text-center h-[100vh]">
          ...Loading
        </p>
      );
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 items-center justify-center h-[100%]"
    >
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <label className="font-[yekan-b]" htmlFor="email">
          نام و نام خانوادگی
        </label>
        <Input
          type="text"
          placeholder="example"
          id="fullName"
          dir="ltr"
          disabled={isLoading}
          {...register("fullName", { required: "required" })}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-2">
        <label className="font-[yekan-b]" htmlFor="email">
          ایمیل
        </label>
        <Input
          // onChange={(e) => setEmail(e.target.value)}
          // value={email}
          type="email"
          placeholder="example@gmail.com"
          id="email"
          dir="ltr"
          autoComplete="email"
          disabled={isLoading}
          {...register("email", { required: "This field is required" })}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-2 mb-3">
        <label className="font-[yekan-b]" htmlFor="password">
          پسوورد
        </label>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          dir="ltr"
          autoComplete="Password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </div>
      <Button
        type="submit"
        style="primary"
        text={isLoading ? "صبر کنید!" : "تایید"}
        disabled={isLoading}
        onClick={handleSubmit}
      />
    </form>
  );
}

export default SingupForm;
