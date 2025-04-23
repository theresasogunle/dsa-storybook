import { ChevronRight, RotateCcw } from "lucide-react";
import { Pill } from "../base/pill";
import { Button } from "../base/button";
import { useState } from "react";
import { motion } from "motion/react";

const string = "HELLO";

export const StringReversal = () => {
  const initialArray = string.split("").map((char, index) => ({
    id: `${char}-${index}`,
    char,
  }));

  const [resetKey, setResetKey] = useState(0);
  const [stringArray, setStringArray] = useState(initialArray);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(stringArray.length - 1);

  const handleNext = () => {
    if (leftIndex >= rightIndex) return;

    const newArray = [...stringArray];
    const temp = newArray[leftIndex];

    newArray[leftIndex] = newArray[rightIndex];
    newArray[rightIndex] = temp;

    setStringArray(newArray);

    setLeftIndex((prev) => prev + 1);
    setRightIndex((prev) => prev - 1);
  };
  const handleRestart = () => {
    setLeftIndex(0);
    setRightIndex(stringArray.length - 1);
    setStringArray(initialArray);
    setResetKey((prev) => prev + 1); // force re-render
  };
  return (
    <div>
      <div key={resetKey} className="flex gap-4">
        {stringArray.map((item, index) => {
          return (
            <motion.div
              layout
              key={item.id}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                duration: 3,
              }}
            >
              <Pill
                value={item.char}
                isLeftActive={leftIndex === index}
                isRightActive={rightIndex === index}
              />
            </motion.div>
          );
        })}
      </div>

      {/* controls */}
      <div className="mt-12 flex items-center justify-center gap-8">
        <Button
          className="flex justify-center items-center gap-4"
          onClick={handleNext}
        >
          <span>Next</span>
          <ChevronRight />
        </Button>
        <Button
          onClick={handleRestart}
          className="flex justify-center items-center gap-4 bg-primary text-white"
        >
          <span>Restart</span>
          <RotateCcw width={18} height={18} />
        </Button>
      </div>
    </div>
  );
};
