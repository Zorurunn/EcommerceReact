import Image from "next/image";

const textMenu = ["Хямдралтай", "Эрэгтэй", "Эмэгтэй", "Хүүхдийн"];

export const Menu = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-row gap-[48px] p-3 container mx-auto">
        <Image src="/menu.svg" alt="img" width={15} height={10} />
        {textMenu.map((item, index) => (
          <p className="text-sm font-semibold" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
