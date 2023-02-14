import { CSSProperties } from "react";

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  lineHeight?: CSSProperties["lineHeight"];
  fontFamily?: CSSProperties["fontFamily"];
  letterSpacing?: CSSProperties["letterSpacing"];
  fontStyle?: CSSProperties["fontStyle"];
  color?: CSSProperties["color"];
  margin?: CSSProperties["margin"];
  textAlign?: CSSProperties["textAlign"];
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  shadow?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  color,
  shadow = false,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing = '',
  textAlign = 'center',
  heading = "h3",
  fontStyle = 'normal',
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
        fontStyle,
        textAlign,
        margin: 0,
        ...(shadow ? {
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
        } : {}),
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