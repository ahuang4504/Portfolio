const CurrentlyReading = () => {
  return (
    <div className="box-3d p-6">
      <div className="text-left mb-6">
        <h2 className="font-heading text-3xl text-[#2F4156]">
          What I'm Reading
        </h2>
      </div>
      <div className="space-y-3">
        <div className="border-l-4 border-[#E8E0DA] pl-4">
          <p className="text-[#2F4156] font-medium text-sm">
            Heart of the Sun Warrior
          </p>
          <p className="text-[#666666] text-xs">Sue Lynn Tan</p>
        </div>
        <div className="border-l-4 border-[#2F4156] pl-4">
          <p className="text-[#2F4156] font-medium text-sm">
            Designing Data-Intensive Applications
          </p>
          <p className="text-[#666666] text-xs">Martin Kleppmann</p>
        </div>
        <div className="border-l-4 border-[#E8E0DA] pl-4">
          <p className="text-[#2F4156] font-medium text-sm">
            The Pragmatic Programmer
          </p>
          <p className="text-[#666666] text-xs">David Thomas & Andrew Hunt</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;
