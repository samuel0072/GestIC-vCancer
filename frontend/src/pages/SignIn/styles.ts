import styled from '@emotion/styled';

import { Box as BoxUI } from '@chakra-ui/react';

export const LightContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  background: 'aquamarine',
}

export const LightBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '300px',
  background: 'white',
  padding: '20px',
  margin: '20px',
  borderRadius: '10px',
}


export const DarkContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  color: 'teal',
  background: '#121212',
}

export const DarkBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  text: 'white',
  maxWidth: '300px',
  borderWidth: '1px',
  background: '#121212',
  padding: '20px',
  margin: '20px',
  borderRadius: '10px',
}


export const DarkSecondaryText = {
  color: 'white'
}

export const LightSecondaryText = {
  color: 'black'
}