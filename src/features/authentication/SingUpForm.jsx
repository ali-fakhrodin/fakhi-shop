function SingUpForm() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[100%]">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <label className="font-[yekan-b]" for="email">
          ایمیل
        </label>
        <Input type="email" placeholder="example@gmail.com" id="email" dir="ltr"/>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-2 mb-3">
        <label className="font-[yekan-b]" for="password">
          پسوورد
        </label>
        <Input type="password" placeholder="Password" id="password" dir="ltr"/>
      </div>
      <Button type="submit" style="primary" text="تایید" />
    </div>
  );
}

export default SingUpForm;
