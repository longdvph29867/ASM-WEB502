type Props = {
  children?: string;
};

function Button(props: Props) {
  return (
    <button className="text-white text-base uppercase font-semibold bg-slate-800 py-2 px-2 rounded mt-3">
      {props.children}
    </button>
  );
}

export default Button;
