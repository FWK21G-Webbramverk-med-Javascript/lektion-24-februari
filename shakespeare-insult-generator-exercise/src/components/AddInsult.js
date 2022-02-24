function AddInsult(props) {
    const { addNewInsult } = props;

    let newInsult = {
        insult: '',
        play: ''
    }

    function handleNewInsult(event) {
        console.log(event);
        newInsult.insult = event.target.value;
    }

    function handleNewPlay(event) {
        newInsult.play = event.target.value;
    }

    function handleClick() {
        console.log(newInsult);
        addNewInsult(newInsult);
    }

    return (
        <section>
            <input type="text" placeholder="Ny förolämpning" 
                onKeyUp={ handleNewInsult } />
            <input type="text" placeholder="Pjäs"
                onKeyUp={ handleNewPlay }/>
            <button onClick={ handleClick }>Lägg till</button>
        </section>
    );
}

export default AddInsult;