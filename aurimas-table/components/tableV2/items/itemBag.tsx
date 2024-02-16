interface LeadListProps {
  name: string;
  x: number;
  y: number;
  rotation: number;
}

export const ItemContent = ({ name }: LeadListProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[25px]" />
      <div className="bg-bottom bg-no-repeat h-[188px] w-[263px] bg-[url('/kd/item_tag.png')] bg-cover z-40 flex items-start pl-[78px] pt-[10px]">
        <div
          className={`w-[160px] h-[100px] flex flex-col items-start justify-center overflow-scroll`}
        >
          <p className={`text-[#1A222F] text-2xl`}>{name}</p>
        </div>
      </div>
      <div className="relative -mt-[40px] h-[419px] w-[315px] bg-no-repeat bg-contain flex p-2 flex justify-center items-center z-30">
        <div className="absolute h-[419px] w-[315px] bg-no-repeat bg-[url('/kd/bag.png')] bg-contain flex p-2 flex justify-center items-center z-30"></div>
        <div className=" h-[210px] w-[210px] bg-no-repeat bg-contain flex z-1  bg-[url('/kd/item_tag.png')]" />
      </div>
      <div className="h-[10px]" />
    </div>
  );
};
