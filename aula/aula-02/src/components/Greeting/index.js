import './style.css'

function Greeting({user}) {
    const greeting = () => {
        return (
            user.firstName ? `${user.firstName} ${user.lastName}` : 'desconhecido'
        );
    }

    return (
        <h1>Olá, {greeting()}!</h1>
    )
}

export default Greeting;