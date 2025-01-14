import { Spinner, Box, Text, Center, Heading, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import ErrorDisplay from './ErrorDisplay'

const Loader = ({ isLoading, error }) => {
  // Overcompicated Loader with cursor effect
  // Written by chatGPT, I would not spent my time doing this
  useEffect(() => {
    if (!isLoading) return

    const particles = []
    const particleContainer = document.createElement('div')
    particleContainer.style.position = 'fixed'
    particleContainer.style.top = '0'
    particleContainer.style.left = '0'
    particleContainer.style.width = '100%'
    particleContainer.style.height = '100%'
    particleContainer.style.pointerEvents = 'none'
    document.body.appendChild(particleContainer)

    const createParticle = (x, y) => {
      const particle = document.createElement('div')
      const size = Math.random() * 6 + 3 // Random size between 3px and 9px
      const angle = Math.random() * 2 * Math.PI // Random direction in radians
      const speed = Math.random() * 2 + 0.5 // Random speed between 0.5 and 2.5

      particle.style.position = 'absolute'
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.background = '#00BFFF'
      particle.style.borderRadius = '50%'
      particle.style.pointerEvents = 'none'
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      particleContainer.appendChild(particle)

      particles.push({
        element: particle,
        life: 100,
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed
        }
      })
    }

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY)
    }

    const animateParticles = () => {
      particles.forEach((particle, index) => {
        particle.life -= 2
        particle.element.style.opacity = particle.life / 100
        particle.element.style.transform = `translate(${(100 - particle.life) * particle.velocity.x}px, ${(100 - particle.life) * particle.velocity.y}px)`

        if (particle.life <= 0) {
          particleContainer.removeChild(particle.element)
          particles.splice(index, 1)
        }
      })

      requestAnimationFrame(animateParticles)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animateParticles()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeChild(particleContainer)
    }
  }, [isLoading])

  if (error) {
    return <ErrorDisplay error={error} />
  }

  if (isLoading) {
    return (
      <Center h="100vh">
        <Flex direction="column" justify="center" align="center" p={6}>
          <Spinner
            size="xl"
            color="cyan.500"
            thickness="4px"
            speed="0.65s"
            mb={4}
          />
          <Heading fontWeight="semibold" color="gray.800">
            Загружаем...
          </Heading>
        </Flex>
      </Center>
    )
  }

  return null
}

export default Loader
