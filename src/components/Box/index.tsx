const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-max w-full p-8 rounded-lg bg-[#F3F3F3]">{children}</div>
  );
};

export default Box;
