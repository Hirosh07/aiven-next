"use client";

const CtaButton = ({ name, onClickAction } : any) => {
  return (
    <button
      className="
        bg-orange-600 
        hover:bg-orange-500 
        hover:shadow 
        hover:shadow-orange-500 
        text-lg 
        text-white 
        rounded-3xl 
        px-4 
        py-2 
        w-fit 
        transition-all 
        duration-300
      "
      onClick={() => onClickAction && onClickAction()}
    >
      {name}
    </button>
  );
};

export default CtaButton;
