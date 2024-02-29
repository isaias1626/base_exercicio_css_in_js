import { HeroForm, FormOverlay, FormContent, TituloH2 } from './styles' // Importe os componentes Styled Components
import { Container } from '../../styles'

const Hero = () => (
  <HeroForm>
    <FormOverlay />
    <FormContent>
      <Container>
        <TituloH2>
          As melhores vagas para tecnologia, design e artes visuais.
        </TituloH2>
      </Container>
    </FormContent>
  </HeroForm>
)

export default Hero
