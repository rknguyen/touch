import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Avatar } from './components/Avatar'
import Monarch from './materials/images/monarch.jpeg'
import { Description, Heading, Text, Title } from './components/Typo'
import { HobbyButton, SocialButton } from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  margin: auto;
  display: block;
  padding-top: 30px;
  max-width: 375px;
`

const Center = styled.div`
  text-align: center;
`

const Body = styled.div`
  padding: 30px 30px 0 30px;
  margin-top: 30px;
  height: 100vh;
  background: #f8f7f8;
  border-radius: 50px 50px 0px 0px;
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`

const HobbyContainer = styled(SocialContainer)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -10px;
`

function App() {
  return (
    <Fragment>
      <Container>
        <Avatar src={Monarch} />
        <Center>
          <Title>Nguyen Huy</Title>
          <Description>touch@nguyenrk.com</Description>
        </Center>
        <Body>
          <SocialContainer>
            <a
              href={'https://www.facebook.com/rknguyen'}
              target={'_blank'}
              rel='noreferrer'
            >
              <SocialButton>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </SocialButton>
            </a>
            <a
              href={'https://www.instagram.com/rknguyen12'}
              target={'_blank'}
              rel='noreferrer'
            >
              {' '}
              <SocialButton>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </SocialButton>
            </a>
            <a
              href={'https://www.linkedin.com/in/rknguyen12'}
              target={'_blank'}
              rel='noreferrer'
            >
              <SocialButton>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </SocialButton>
            </a>
          </SocialContainer>

          <Heading>About</Heading>
          <Text>
            Nguyen M. Huy, 19y, Software Engineer. I am currently interested in
            Deep Learning, Blockchain and Golang. I spend 50% the day for
            reading technical news and blogs. Wanna coffee talk with me?, just
            go to my DM (above).
          </Text>

          <Heading>Hobbies</Heading>
          <HobbyContainer>
            <HobbyButton>👨‍💻 Coding</HobbyButton>
            <HobbyButton>🎸 Guitar</HobbyButton>
            <HobbyButton>💤 Sleep</HobbyButton>
            <HobbyButton>🏓 Table tennis</HobbyButton>
          </HobbyContainer>
        </Body>
      </Container>
    </Fragment>
  )
}

export default App
