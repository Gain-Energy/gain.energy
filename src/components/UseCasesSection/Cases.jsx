import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as S from './style';

gsap.registerPlugin(ScrollTrigger)

function Cases() {
    const [activeCases, setActiveCases] = useState(Array(20).fill(false))
    const casesRef = useRef([])
    const casesBlockRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            casesBlockRef.current,
            {
                opacity: 0,
                y: '20%' 
            }, 
            {
                opacity: 1, 
                y: '0%', 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: casesBlockRef.current,
                    start: 'top-=30% 50%', 
                    toggleActions: 'play none none none', 
                    // markers: true
                },
                onComplete: () => {
                    casesRef.current.forEach((element, index) => {
                        if (element) {
                            gsap.to(element, {
                                scrollTrigger: {
                                    trigger: element,
                                    start: "top+=50px center+=60px",
                                    onEnter: () => handleActivate(index),
                                    onLeaveBack: () => handleDeactivate(index),
                                    // markers: true
                                },
                            })
                        }
                    })
                }
            }
        )
    }, [])

    const handleActivate = (index) => {
        setActiveCases((prev) => {
            const updated = [...prev]
            updated[index] = true
            return updated
        })
    }

    const handleDeactivate = (index) => {
        setActiveCases((prev) => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
        })
    }

    return (
        <S.Cases ref={casesBlockRef}>
            <S.CasesLeft>
                <S.Case ref={(el) => (casesRef.current[0] = el)} isActive={activeCases[0]} position={'left'}>Automated daily, end-of-well <br />or other reporting</S.Case>
                <S.Case ref={(el) => (casesRef.current[1] = el)} isActive={activeCases[1]} position={'left'}>Casing wear analysis <br />based on DDRs</S.Case>
                <S.Case ref={(el) => (casesRef.current[2] = el)} isActive={activeCases[2]} position={'left'}>Well status diagrams, <br />stick charts</S.Case>
                <S.Case ref={(el) => (casesRef.current[3] = el)} isActive={activeCases[3]} position={'left'}>Risk Assessment <br />Charts</S.Case>
                <S.Case ref={(el) => (casesRef.current[4] = el)} isActive={activeCases[4]} position={'left'}>Stuck Pipe and other <br />real-time risk assessments</S.Case>
                <S.Case ref={(el) => (casesRef.current[5] = el)} isActive={activeCases[5]} position={'left'}>Rig Selection, <br />Rig Move Optimization</S.Case>
                <S.Case ref={(el) => (casesRef.current[6] = el)} isActive={activeCases[6]} position={'left'}>Prepare regulatory or other documentation based on templates</S.Case>
            </S.CasesLeft>
            <S.CasesRight>
                <S.Case ref={(el) => (casesRef.current[7] = el)} isActive={activeCases[7]} position={'right'}>Best composite model based <br />on offset wells</S.Case>
                <S.Case ref={(el) => (casesRef.current[8] = el)} isActive={activeCases[8]} position={'right'}>Well path <br />tortuosity review</S.Case>
                <S.Case ref={(el) => (casesRef.current[9] = el)} isActive={activeCases[9]} position={'right'}>NPT & lessons <br />learned analysis</S.Case>
                <S.Case ref={(el) => (casesRef.current[10] = el)} isActive={activeCases[10]} position={'right'}>Rig selection process through <br />feasibility studies</S.Case>
                <S.Case ref={(el) => (casesRef.current[11] = el)} isActive={activeCases[11]} position={'right'}>Drilling KPI or <br />time/cost analytics</S.Case>
                <S.Case ref={(el) => (casesRef.current[12] = el)} isActive={activeCases[12]} position={'right'}>Post-drilling performance analysis <br />on tools and vendors</S.Case>
                <S.Case ref={(el) => (casesRef.current[13] = el)} isActive={activeCases[13]} position={'right'}>Verify documents against company <br />or industry standards</S.Case>
                <S.Case ref={(el) => (casesRef.current[14] = el)} isActive={activeCases[14]} position={'right'}>...and many more</S.Case>
            </S.CasesRight>
        </S.Cases>
    )
}

export default Cases;