const ShowEvent = ({
  show,
  setShow,
  data,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
}) => {
  return (
    <div hidden={!show}>
      <div className="fixed top-[20%] left-[50%] translate-x-[-50%] w-fit max-w-xl bg-primary min-h-[200px] z-40 p-4">
        <img src={data?.poster} className="max-h-[70vh] w-fit object-contain" />
      </div>
      <div
        className="fixed top-0 left-0 w-full h-[100vh] bg-neutral/70 z-30"
        onClick={() => setShow(false)}
      ></div>
    </div>
  );
};

export default ShowEvent;
