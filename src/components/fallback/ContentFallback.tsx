import React, { useEffect } from "react";
import Container from "@src/layouts/Container";

interface ContentFallbackProps {
  isAnimating: boolean;
  setIsAnimating: (bool: boolean) => void;
}
const ContentFallback: React.FC<ContentFallbackProps> = ({
  isAnimating,
  setIsAnimating,
}) => {
  useEffect(() => {
    setIsAnimating(true);
    return () => {
      setIsAnimating(false);
    };
  }, [isAnimating, setIsAnimating]);

  return (
    <Container>
      <></>
    </Container>
  );
};
export default ContentFallback;
