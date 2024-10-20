function EmptyWatchListSection() {
  return (
    <div className="flex flex-col items-center justify-center col-span-12 min-h-[60vh] gap-y-5">
      <h3 className="capitalize font-bold">your watch list is empty </h3>
      <img src="empty.png" alt="" />
      <ul className="px-4 flex flex-col gap-y-4 font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-blue-500 text-xs vxs:text-sm xs:text-base md:text-lg italic">
        <li>Please first navigate to the desired movie page.</li>
        <li>
          {`Then, after clicking the 'WATCH THE...' button, that movie will be saved
          in your Watch list`}
        </li>
      </ul>
    </div>
  );
}

export default EmptyWatchListSection;
