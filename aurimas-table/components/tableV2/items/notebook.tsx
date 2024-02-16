
export const Notebook = () => {
  return (
    <div className="relative flex flex-col items-start p-[10px] h-[347px]">
      <div className="absolute left-[8px] z-40 ">
        <div className="h-[65px]"></div>
        <div className="relative bg-no-repeat h-[26px] w-[234px] bg-[url('/kd/rules_title.png')] bg-contain flex items-center justify-center"></div>
        <div className="h-[25px]"></div>
        <p
          className={`text-[#1A222F] text-[14px] z-30  w-[280px]`}
        >
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vestibulum augue massa sed aenean."
          }
        </p>
      </div>
      <div className="absolute left-[50%] -top-[0px] bg-bottom bg-no-repeat h-[347px] w-[590px] bg-[url('/kd/rules_header.png')] bg-cover z-20 -translate-x-[320px]"></div>
      <div className="h-[10px]" />
    </div>
  );
};
