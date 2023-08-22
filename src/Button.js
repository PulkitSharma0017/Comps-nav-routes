function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlined,
  rounded,
}) {
  return (
    <button className="border border-blue-600 bg-blue-500 px-3 py-1.5 text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  checkPurposeValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      throw new Error(
        "Only one of primary, secondary, success, warning, danger can be true",
      );
    }
  },
};

export default Button;
