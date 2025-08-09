import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useCreateCar } from "../features/cars/useCreateCar";

const inputClassname = "w-[65%] md:w-[50%] lg:w-[30%] rounded-md px-2 py-1";
const inputContainerClassname = "w-full flex justify-center items-center gap-3";

function AddNewCar() {
  const { register, handleSubmit } = useForm();
  const { createCar, isLoading } = useCreateCar();

  function onSubmit(newCar) {
    const image =
      typeof newCar.image === "string" ? newCar.image : newCar.image[0];

    createCar({ ...newCar, image: image });
  }

  function onError(err) {
    for (const item in err) {
      toast.error(err[item].message);
    }
  }
  return (
    <div className="flex items-center justify-center w-[100%]">
      <Toaster />
      <form
        className="flex flex-col gap-3 h-[50vh] justify-center w-full"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className={inputContainerClassname}>
          <label htmlFor="name">نام خودرو</label>
          <input
            type="text"
            id="name"
            className={inputClassname}
            {...register("name", { required: "نام خودرو را وارد کنید" })}
            disabled={isLoading}
          />
        </div>
        <div className={inputContainerClassname}>
          <label htmlFor="price">قیمت</label>
          <input
            type="number"
            id="price"
            className={inputClassname}
            {...register("price", { required: "قیمت خودرو را وارد کنید" })}
            disabled={isLoading}
          />
        </div>
        <div className={inputContainerClassname}>
          <label htmlFor="desc">توضیحات</label>
          <textarea
            type=""
            id="desc"
            className={inputClassname}
            {...register("desc", {
              required: "نوشتن توضیحات الزامی است",
              min: {
                value: 25,
                message: "حداقل 25 کاراکتر برای توضیحات الزامی است",
              },
            })}
            disabled={isLoading}
          />
        </div>
        <div className={inputContainerClassname}>
          <label htmlFor="file">تصویر</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            className={inputClassname + " " + "bg-gray-300 text-green-900"}
            {...register("image", { required: "یک تصویر انتخاب کنید" })}
            disabled={isLoading}
          />
        </div>
        <div className={inputContainerClassname}>
          <button
            type="submit"
            disabled={isLoading}
            className="w-1/2 px-2 py-1 rounded-lg bg-green-600 text-white"
          >
            {isLoading ? "در حال دریافت اطلاعات" : "تایید"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewCar;
