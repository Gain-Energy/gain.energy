import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import * as S from './style';

function JoinButton() {
    const outerRef = useRef(null)
    const innerRef = useRef(null)
    const blueRef = useRef(null)
    const greenRef = useRef(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "linear" })

        tl
            .to(outerRef.current, {
                background: "linear-gradient(90deg, rgba(29, 213, 159, 0.3), rgba(57, 255, 63, 0.3))",
                boxShadow: "0 0 5px 5px rgba(29, 213, 159, 0.3)",
                duration: 1,
            })
            .to(outerRef.current, {
                background: "linear-gradient(90deg, rgba(57, 255, 63, 0.3), rgba(29, 213, 159, 0.3))",
                boxShadow: "0 0 5px 5px rgba(57, 255, 63, 0.3)",
                duration: 1,
            })
            .to(outerRef.current, {
                background: "linear-gradient(90deg, rgba(29, 213, 159, 0.3), rgba(29, 213, 159, 0.3))",
                boxShadow: "0 0 5px 5px rgba(29, 213, 159, 0.3)",
                duration: 1,
            })

        gsap.to(innerRef.current, {
            scale: 0.96,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        })
    }, [])

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden';
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
            document.documentElement.style.overflowY = 'auto';
        }
        return () => {
            document.body.style.overflowY = 'auto';
            document.documentElement.style.overflowY = 'auto';
        };
    }, [open]);

    return (
        <>
            <S.JoinButtonLink onClick={() => setOpen(true)}>
                <S.JoinButtonOuter ref={outerRef}>
                    <S.RainbowContainer>
                        <S.Blue ref={blueRef}></S.Blue>
                        <S.Green ref={greenRef}></S.Green>
                    </S.RainbowContainer>
                    <S.JoinButtonInner ref={innerRef}>
                        <S.UpperText>Click TO</S.UpperText>
                        <S.LowerText>Join Exclusive Trial</S.LowerText>
                    </S.JoinButtonInner>
                </S.JoinButtonOuter>
            </S.JoinButtonLink>
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999,
                        opacity: open ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                    }}
                    onClick={() => setOpen(false)}
                >
                    <div
                        style={{
                            width: '80%',
                            height: '80%',
                            backgroundColor: 'rgb(8, 2, 49)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p style={{
                            position: 'absolute',
                            zIndex: 1000,
                            color: 'white',
                            right: 'calc(10% + 36px)',
                            top: 'calc(10% + 36px)',
                            cursor: 'pointer',
                            fontSize: 20
                        }}
                            onClick={() => setOpen(false)}
                        >Close</p>
                        <iframe
                            title="submission form"
                            style={{ width: "100%", height: "100%", border: 'none' }}
                            src="https://uo8s896zgf1.typeform.com/to/zPgTCKZF"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    )
}

export default JoinButton;