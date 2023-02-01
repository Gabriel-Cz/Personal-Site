import { CSSProperties } from "react";

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  lineHeight?: CSSProperties["lineHeight"];
  fontFamily?: CSSProperties["fontFamily"];
  letterSpacing?: CSSProperties["letterSpacing"];
  color?: CSSProperties["color"];
  margin?: CSSProperties["margin"];
  textAlign?: CSSProperties["textAlign"];
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const Text: React.FC<TextProps> = ({
  children,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing = '',
  textAlign = 'center',
  heading = "h3",
  style,
  ...rest
}) => {
  const TAG = heading;
  return (
    <TAG
      style={{
        fontSize,
        fontWeight,
        fontFamily,
        lineHeight,
        letterSpacing,
        color,
        textAlign,
        margin: 0,
        ...style
      }}
      {...rest}
    >
      {children}
    </TAG>
  );
}

Text.defaultProps = {
  color: '#FFFFFF',
  fontFamily: 'Gilroy-Light',
  fontSize: '18px',
  lineHeight: '25px',
  fontWeight: 400,
  letterSpacing: '1px',
  textAlign: 'start',
}

export default Text;