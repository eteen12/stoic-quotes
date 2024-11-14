import Button from "../reusables/button";

export default function CreatedBy() {
  return (
    <div className="transition-all duration-700">
      <div className="mx-auto max-w-[1700px] px-6 pb-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="  text-4xl tracking-tight sm:text-5xl">
            Created by Teleta <br /> Development
          </h2>
          <p className="tracking-tight grayText mt-10 text-lg sm:text-xl">
            Teleta Development, is a Canadian web development company, owned by
            Ethan Breitkreutz
          </p>
        </div>
        <div className="mt-10 flex flex-col w-full gap-y-5 md:flex-row gap-x-2">
          <Button
            text="Teleta website"
            link="https://teletadevelopment.com"
            aria="go to the teleta development website"
          />
          <Button
            text="About me"
            link="/about"
            aria="go to the about ethan breitkreutz section"
          />
        </div>
      </div>
    </div>
  );
}
