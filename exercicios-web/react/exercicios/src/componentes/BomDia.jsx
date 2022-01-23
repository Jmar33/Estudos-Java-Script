import React from 'react'

//por padrão uma função não pode retornar dois elementos JSX adjacentes, pra isso devemos encapsular 
//esses elementos, seja com uma atg DIV, Fragment, ou através de um array:

export default props =>
 [
        <h1 key="h1">Bom dia {props.nome}!</h1>,
        <h2 key="h2">Até breve!</h2>
]


// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>