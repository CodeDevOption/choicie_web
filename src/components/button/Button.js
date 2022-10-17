import './Button.css';


const Button = ({title , cName, icon}) => {
  return (
    
    <button className={`btn ${cName}`}  >
    <div className="btn-name"><i>{icon}</i> <p>{title}</p></div>
    </button>
  )
}

export default Button