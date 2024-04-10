import React from 'react';

const PageNavigation: React.FC = () => {
  return (
    <div className="w-full flex justify-center md:justify-start py-5 px-20  md:py-10 md:px-32 ">
      <div className="page-nav w-fit flex flex-col md:items-start items-center">
        <p className="text-base md:text-xl">Previous page</p>
        <p className=" text-2xl md:text-4xl text-cyan-300">Quality Assurance</p>
      </div>
    </div>
  );
};

export default PageNavigation;
