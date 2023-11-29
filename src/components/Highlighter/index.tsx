import React from 'react';
import { Container, Word } from './Highlighter.styled';

export const Highlighter = ({word}: {word: string}) => {
    return(
        <Container>
            <Word>{word}</Word>
        </Container>
    )
};
export default Highlighter;
// style={{lineHeight: 10}}