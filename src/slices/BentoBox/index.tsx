import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

/**
 * Props for `BentoBox`.
 */
export type BentoBoxProps = SliceComponentProps<Content.BentoBoxSlice>;

/**
 * Component for "BentoBox" Slices.
 */
const BentoBox: FC<BentoBoxProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="font-bold-slanted mb-8 scroll-pt-6 text-6xl uppercase md:text-8xl">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {slice.primary.items.map((item, index) => (
          <BentoBoxItem key={index} item={item} />
        ))}
      </div>
    </Bounded>
  );
};

export default BentoBox;


// =================================================================================================================


type BentoBoxItemProps = {
  item: Content.BentoBoxSliceDefaultPrimaryItemsItem
};

function BentoBoxItem({ item }: BentoBoxItemProps) {
  return (
    <div className={
      clsx(
        "relative overflow-hidden rounded-3xl",
        item.size === "Small" && "md:col-span-2",
        item.size === "Medium" && "md:col-span-3",
        item.size === "Large" && "md:col-span-4"
      )
    }> 
      <PrismicNextImage 
        field={item.image} 
        className="h-full w-full object-cover" 
        quality={96} 
        width={700}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black" />

      <div className="absolute bottom-0 left-0 max-w-xl p-6 text-xl text-balance text-white">
        <PrismicRichText field={item.text} />
      </div>
    </div>
  )
}