import Button from "../reusables/button";

export default function CreatedBy() {
  return (
    <div className="">
      <div className="mx-auto max-w-[1700px] px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="  text-4xl tracking-tight sm:text-5xl">
            Created by Teleta <br /> Development
          </h2>
          <p className="tracking-tight grayText mt-10 text-lg sm:text-xl">
            Teleta Development, is a Canadian web development company, owned by
            Ethan Breitkreutz
          </p>
        </div>
        <div className="mt-10 flex items-center gap-x-2">
          <Button text="Teleta website" link="https://teletadevelopment.com" />
          <Button text="About me" link="/about" />
        </div>
      </div>
    </div>
  );
}
