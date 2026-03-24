function Input(props) {
  return (
    <input
      {...props}
      className="w-full p-2 rounded-md border border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
    />
  );
};

export default Input;