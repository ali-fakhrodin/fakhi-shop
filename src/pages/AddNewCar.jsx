const inputClassname = "w-[65%] md:w-[50%] lg:w-[30%] rounded-md px-2 py-1";
const inputContainerClassname = "w-full flex justify-center items-center gap-3";

function AddNewCar() {
  return (
    <div className="flex items-center justify-center w-[100%]">
      <form className="flex flex-col gap-3 h-[50vh] justify-center w-full">
        <div className={inputContainerClassname}>
          <label for="name">نام خودرو</label>
          <input type="text" id="name" className={inputClassname} />
        </div>
        <div className={inputContainerClassname}>
          <label for="price">قیمت</label>
          <input type="text" id="price" className={inputClassname} />
        </div>
        <div className={inputContainerClassname}>
          <label for="desc">توضیحات</label>
          <textarea type="" id="desc" className={inputClassname} />
        </div>
        <div className={inputContainerClassname}>
          <label for="file">تصویر</label>
          <input
            type="file"
            id="file"
            className={inputClassname + " " + "color-red"}
          />
        </div>
      </form>
    </div>
  );
}

export default AddNewCar;
