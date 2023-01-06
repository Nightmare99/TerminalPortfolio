import React from 'react'

import{PromptContainer,PromptNameContainer,PromptSymbolContainer,PromptDomainContainer} from './prompt.styles'

export default function Prompt() {
  return (
    <PromptContainer>
      <PromptNameContainer>
        vi
      </PromptNameContainer>
      <PromptSymbolContainer >.</PromptSymbolContainer>
      <PromptDomainContainer>
        sh
      </PromptDomainContainer>
      <PromptSymbolContainer>:$->>&nbsp;</PromptSymbolContainer>
    </PromptContainer>
  )
}
