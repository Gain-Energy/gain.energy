import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as S from "./style";

function JoinButton() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const blueRef = useRef(null);
  const greenRef = useRef(null);

  const gotoUpstrima = () => {
    window.open("https://upstrima.ai", "_blank");
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" });

    tl.to(outerRef.current, {
      background:
        "linear-gradient(90deg, rgba(29, 213, 159, 0.3), rgba(57, 255, 63, 0.3))",
      boxShadow: "0 0 5px 5px rgba(29, 213, 159, 0.3)",
      duration: 1,
    })
      .to(outerRef.current, {
        background:
          "linear-gradient(90deg, rgba(57, 255, 63, 0.3), rgba(29, 213, 159, 0.3))",
        boxShadow: "0 0 5px 5px rgba(57, 255, 63, 0.3)",
        duration: 1,
      })
      .to(outerRef.current, {
        background:
          "linear-gradient(90deg, rgba(29, 213, 159, 0.3), rgba(29, 213, 159, 0.3))",
        boxShadow: "0 0 5px 5px rgba(29, 213, 159, 0.3)",
        duration: 1,
      });

    gsap.to(innerRef.current, {
      scale: 0.96,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <S.JoinButtonLink onClick={gotoUpstrima}>
        <S.JoinButtonOuter ref={outerRef}>
          <S.RainbowContainer>
            <S.Blue ref={blueRef}></S.Blue>
            <S.Green ref={greenRef}></S.Green>
          </S.RainbowContainer>
          <S.JoinButtonInner ref={innerRef}>
            <S.UpperText>Click TO</S.UpperText>
            <S.LowerText>Start Using Upstrima</S.LowerText>
          </S.JoinButtonInner>
        </S.JoinButtonOuter>
      </S.JoinButtonLink>
    </>
  );
}

export default JoinButton;
