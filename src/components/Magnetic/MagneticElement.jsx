import React, { useRef } from "react"
import gsap from "gsap"
import { useEffect } from "react"
import "./MagneticElement.css"

const MagneticElement = ({ 
    children, 
    strength = 0.3,        // How much the element follows the mouse (0-1)
    maxDistance = 40,      // Maximum distance the element can move
    duration = 0.4,        // Animation duration
    ease = "power3.out"    // Easing function
}) => {
    const ref = useRef(null)

    useEffect(() => {
        const magneticElement = ref.current

        if (!magneticElement) return

        const xTo = gsap.quickTo(magneticElement, "x", { 
            duration, 
            ease 
        })
        const yTo = gsap.quickTo(magneticElement, "y", { 
            duration, 
            ease 
        })

        const mouseMove = (e) => {
            const { clientX, clientY } = e
            const { width, height, left, top } = magneticElement.getBoundingClientRect()
            
            // Calculate distance from center
            const centerX = left + width / 2
            const centerY = top + height / 2
            const deltaX = clientX - centerX
            const deltaY = clientY - centerY
            
            // Calculate distance from center
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
            
            // Apply strength and distance limiting
            let moveX = deltaX * strength
            let moveY = deltaY * strength
            
            // Limit maximum distance
            if (distance > maxDistance) {
                const factor = maxDistance / distance
                moveX *= factor
                moveY *= factor
            }
            
            xTo(moveX)
            yTo(moveY)
        }

        const mouseLeave = () => {
            xTo(0)
            yTo(0)
        }

        magneticElement.addEventListener("mousemove", mouseMove)
        magneticElement.addEventListener("mouseleave", mouseLeave)

        return () => {
            magneticElement.removeEventListener("mousemove", mouseMove)
            magneticElement.removeEventListener("mouseleave", mouseLeave)
        }
    }, [strength, maxDistance, duration, ease])

    return (
        <div className="magnetic-element" ref={ref}>
            {children}
        </div>
    )
}

export default MagneticElement