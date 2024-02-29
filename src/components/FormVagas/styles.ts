import styled from 'styled-components'

type FormContainerProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children?: React.ReactNode
}

export const FormContainer = styled.form<FormContainerProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

type PesquisarButtonProps = {
  type: 'submit'
  children?: React.ReactNode
}

export const PesquisarButton = styled.button<PesquisarButtonProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

type CampoPesquisaProps = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'search'
}

export const CampoPesquisa = styled.input<CampoPesquisaProps>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
