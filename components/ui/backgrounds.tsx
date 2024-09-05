"use client"

import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  bg_types?: "grid" | "default" | "dots" | "lines"
  children?: React.ReactNode
  animated?: boolean
  light?: boolean
  duration?: number
}

const Row = ({
  index,
  className,
  animated,
  light,
}: {
  index: number
  className?: string
  animated?: boolean
  light?: boolean
}) => {
  return (
    <motion.span
      initial={animated ? { width: 0 } : {}}
      animate={animated ? { width: "100%" } : {}}
      transition={animated ? { duration: 1 } : {}}
      className={cn(
        "w-full h-[1px] bg-primary",
        {
          "bg-primary": light,
        },
        className
      )}
    >
      <motion.span
        initial={{ width: "0%", opacity: 0 }} // Estado inicial: 0%
        animate={{
          width: ["0%", "20%"],
          opacity: [1, 0],
        }}
        transition={{
          duration: 2.5,
          delay: 2,
          type: "tween",
          ease: "easeInOut",
          times: [0, 1],
        }}
        className={cn({
          "w-0 h-full bg-primary rounded-full": index === 4,
        })}
      />
    </motion.span>
  )
}

const Col = ({
  index,
  className,
  animated,
  light,
  lines,
  length,
}: {
  index: number
  className?: string
  animated?: boolean
  light?: boolean
  lines?: boolean
  length?: number
}) => {
  return (
    <motion.span
      initial={animated ? { height: 0 } : {}}
      animate={
        lines
          ? animated && { height: "200%" }
          : animated
          ? { height: "100%" }
          : {}
      }
      transition={animated ? { duration: 1.5, delay: 0.3 } : {}}
      className={cn(
        "w-[1px] h-full bg-[#002d3b]/20 flex items-start justify-center",
        {
          "bg-primary": light,
          "rotate-45": lines,
        },
        className
      )}
    />
  )
}

const Background = ({
  children,
  bg_types,
  className,
  animated,
  light,
  duration,
  ...rest
}: BoxProps) => {
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [boxWidth, setBoxWidth] = useState<number>()
  const [boxHeight, setBoxHeight] = useState<number>()
  const [numberOfRows, setNumberOfRows] = useState<number>(0)
  const [numberOfCols, setNumberOfCols] = useState<number>(0)

  const variants = {
    default: "relative w-full h-full",
    grid: "relative w-full h-screen overflow-hidden shadow-internal",
    dots: "relative w-full h-screen overflow-hidden bg-gradient-further",
    lines: "relative w-full h-screen overflow-hidden",
  }

  useEffect(() => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth)
      setBoxHeight(boxRef.current.offsetHeight)
    }
  }, [boxRef.current, boxRef.current?.offsetHeight])

  useEffect(() => {}, [boxWidth])

  useEffect(() => {
    if (boxHeight !== 0 && boxHeight) {
      setNumberOfRows(Math.floor(boxHeight / 40) - 1)
    }
    if (boxWidth !== 0 && boxWidth) {
      setNumberOfCols(Math.floor(boxWidth / 40) - 1)
    }
  }, [boxWidth])

  return (
    <div
      {...rest}
      ref={boxRef}
      className={cn(
        {
          [variants[bg_types || "default"]]: true,
        },
        className
      )}
    >
      {bg_types === "lines" && (
        <div className="absolute h-screen flex items-start justify-center flex-row -z-10">
          <div className="w-full h-full flex items-center justify-center flex-row gap-[68px]">
            {[...Array(numberOfCols)].map((_, i) => (
              <Col
                key={i}
                index={i}
                animated={animated}
                light={light}
                lines={true}
                length={numberOfCols}
              />
            ))}
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

export default Background
