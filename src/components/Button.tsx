const Button = (props: any) => {
  return (
    <button
      {...props}
      className={
        "bg-accent text-primary py-2 px-4 md:py-3.5 md:px-8 hover:bg-accent/80 transition-all duration-100 border border-primary/20 flex gap-1.5 md:gap-2 items-center rounded-lg font-medium text-md md:text-lg hover:border-transparent " +
        props?.className
      }
    >
      {props.children}
      {props?.icon}
    </button>
  );
};

export default Button;
