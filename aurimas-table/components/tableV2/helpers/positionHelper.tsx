interface Props {
  children: JSX.Element;
  x: number;
  y: number;
  rotation: number;
}

export const PositionHelper = ({ children, rotation, x, y }: Props) => {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg) translate(${x}px,${y}px)` }}
    >
      {children}
    </div>
  );
};
