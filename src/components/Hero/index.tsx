import { HeroForm, FormOverlay, FormContent } from './styles' // Importe os componentes Styled Components

const Hero = () => (
  <HeroForm>
    <FormOverlay />
    <FormContent>
      <div className="container">
        <h2>As melhores vagas para tecnologia, design e artes visuais.</h2>
      </div>
    </FormContent>
  </HeroForm>
)

export default Hero
