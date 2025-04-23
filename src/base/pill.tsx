import { ArrowUpIcon } from "lucide-react";

type PillProps = {
  value: string;
  isLeftActive: boolean;
  isRightActive: boolean;
};

export const Pill = ({ value, isLeftActive, isRightActive }: PillProps) => {
  return (
    <div>
      <div className="bg-white w-20 h-20 flex items-center justify-center rounded-sm">
        <span className="text-4xl font-medium text-primary">{value}</span>
      </div>
      {isLeftActive && <Pointer label="P1" />}
      {isRightActive && <Pointer label="P2" />}
     
    </div>
  );
};

Pill.displayName = "Pill";

const Pointer = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 text-white">
      <ArrowUpIcon className="w-12 h-12" />
      <span className="text-3xl">{label}</span>
    </div>
  );
};
