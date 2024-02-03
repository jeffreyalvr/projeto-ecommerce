const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-10 h-max w-full p-10 rounded-lg bg-[#F3F3F3] sm:p-20">
      {children}
    </div>
  );
};

export default Box;
