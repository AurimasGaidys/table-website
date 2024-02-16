interface LeadListProps {
  name: string;
}

export const UserContent = ({ name }: LeadListProps) => {
  return (
    <>
      <div
        className="absolute left-[50%] top-[138px] bg-no-repeat w-[150px] h-[150px] bg-contain -translate-x-1/2 bg-[url('/kd/256.jpeg')]"
      ></div>
      <div
        className={`absolute left-[50%] top-[325px] -translate-x-1/2 z-40 text-[#1A222F] text-2xl`}
      >
        Detective {name}
      </div>
      <div className="absolute left-[50%] top-[0] h-[280px] w-[280px] -translate-x-[64%]  bgh-center bg-no-repeat h-[389px] w-[582px] bg-[url('/kd/header.png')] bg-contain z-30"></div>
    </>
  );
};
