import FastMarquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeItem = ({
  text,
  iconNumber,
}: {
  text: string;
  iconNumber: 1 | 2;
}) => (
  <div className="flex items-center gap-2 mx-8">
    <span className="text-white text-lg whitespace-nowrap">{text}</span>
    <Image
      src={`/icons/${iconNumber}.png`}
      alt={`Icon ${iconNumber}`}
      width={24}
      height={24}
      className="w-6 h-6"
    />
  </div>
);

const marqueeItems = [
  { text: "Designed and delivered", icon: 1 },
  { text: "Evaluated and tested", icon: 2 },
  { text: "Cooked and served", icon: 1 },
  { text: "Built and deployed", icon: 2 },
  { text: "Designed and delivered", icon: 1 },
  { text: "Evaluated and tested", icon: 2 },
  { text: "Cooked and served", icon: 1 },
  { text: "Built and deployed", icon: 2 },
];

export default function Marquee() {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <FastMarquee
        gradient={false}
        speed={50}
        loop={1}
        className="overflow-hidden"
      >
        {marqueeItems.map((item, index) => (
          <MarqueeItem
            key={index}
            text={item.text}
            iconNumber={item.icon as 1 | 2}
          />
        ))}
      </FastMarquee>
    </div>
  );
}
