import { Container } from './styles.js'

import Calculator from '../Calculator'
import History from '../History'

export default () => {
    return (
        <Container>
            <Calculator />
            <History />
        </Container>
    )
}
