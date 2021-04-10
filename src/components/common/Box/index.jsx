import "./styles.scss";

export const Box = ({ children, className = "", as, ...rest }) => {
  if (as) {
    const TagName = as;
    return (
      <TagName className={`box ${className}`} {...rest}>
        {children}
      </TagName>
    );
  } else {
    return (
      <div className={`box ${className}`} {...rest}>
        {children}
      </div>
    );
  }
};

export default Box;
