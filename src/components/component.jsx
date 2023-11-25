const Button = ({children, onClick}) => {
  
  return <button onClick={onClick} >{children}</button>
}

const Counter = ({value}) => {
  return <span>{value}</span>
}


export {Button, Counter}
