import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  	*, *::after, *::before{
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
	button, a{
	  cursor: pointer;
	}
	body{
      min-height: 100vh;
	  width: 100%;
    }
	:root{
	  --header-heigth: 0px
	}
`

const Wrapper = styled.div`
  	width: 100%;
  	min-height: calc(100vh - var(--header-heigth));
`


export {Wrapper, GlobalStyles}