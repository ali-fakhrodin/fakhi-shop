import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[100%]">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <label className="font-[yekan-b]" htmlFor="email">
          ایمیل
        </label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="example@gmail.com"
          id="email"
          dir="ltr"
          autoComplete="email"
          disabled={isLoading}
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-2 mb-3">
        <label className="font-[yekan-b]" htmlFor="password">
          پسوورد
        </label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          id="password"
          dir="ltr"
          autoComplete="Password"
          disabled={isLoading}
        />
      </div>
      <Button
        type="submit"
        style="primary"
        text={isLoading ? "صبر کنید!" : "تایید"}
        disabled={isLoading}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default LoginForm;
