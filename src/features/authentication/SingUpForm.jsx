import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useSingup } from "./useSingUp";

function SingupForm() {
  const { isLoading, singup } = useSingup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();

  function onSubmit({ fullName, email, password }) {
    // if (isLoading) return <p>pp</p>;
    singup({ fullName, email, password }, { onSettled: reset });
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
          // onChange={(e) => setEmail(e.target.value)}

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
          // onChange={(e) => setPassword(e.target.value)}
          // value={password}
          type="password"
          placeholder="Password"
          id="password"
          dir="ltr"
          autoComplete="Password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
          })}
        />
      </div>
      <Button
        type="submit"
        style="primary"
        //    text={isLoading ? "صبر کنید!" : "تایید"}
        disabled={isLoading}
        onClick={handleSubmit}
      />
    </form>
  );
}

export default SingupForm;
