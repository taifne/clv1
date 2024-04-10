import React from "react";

interface IframeProps {
  src: string;
  title?: string;
  allowFullScreen?: boolean;
  className?: string;
}

const Iframe: React.FC<IframeProps> = ({ src, title = "Embedded Content", allowFullScreen = true, className }) => {
  return (
    <div className={`md:grid-span-1 md:h-2/3 max-h-96 h-96 iframe-container sm:w-full px-5 sm:pt-4 mb-2  ${className}`}>
      <iframe
        className="responsive-iframe h-full w-full  border-b-2 border-red-950 md:border-l-2 md:border-b-0"
        src={src}
        title={title}
        allowFullScreen={allowFullScreen}
      />
    </div>
  );
};

export default Iframe;
