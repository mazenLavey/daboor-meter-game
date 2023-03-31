import DieCSS from './Die.module.css';

const Die = (props)=>{

    const styles = {
        backgroundColor: props.isHeld ? '#A8685E' : 'white',
        color: props.isHeld ? 'white' : '#111',
    }

    return (
        <div className={DieCSS.die__box} style={styles} onClick={props.toHeld}>
            <p>{props.value}</p>
        </div>
    );
};

export default Die;