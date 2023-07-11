import React from 'react';
import Animation from './components/animation/Animation'


const App = () => {
    const [ativar, setAtivar] = React.useState(false)

    return (<>
        <button
            onClick={() => setAtivar(!ativar)}
            className='bg-violet-900 text-white p-4 wiggle'>
            Ativar
        </button>
        {ativar && <Animation />}


    </>
    );
};

export default App;
