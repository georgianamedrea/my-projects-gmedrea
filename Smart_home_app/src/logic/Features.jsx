import Feature from "./Feature";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Features = ({ toggleAction, newFeature }) => {

    // console.log(localStorage.getItem('localStorageTest')) // folosim JSON.parse() daca e obiect
    // console.log(sessionStorage.getItem('setSessionStorage'))

    const FEATURES = [
        {
            name: 'Toggle Lights',
            action: 'Turn the lights on',
            state: false,
            id: 0
        },
        {
            name: 'Toggle AC',
            action: 'Turn the AC on',
            state: false,
            id: 1
        },
        {
            name: 'Clean',
            action: 'Start Cleaning',
            state: false,
            id: 2
        },
        {
            name: 'Coffee Time',
            action: 'Make a coffee',
            state: false,
            id: 3
        }
    ]

    const [features, setFeatures] = useState(FEATURES)

    useEffect(() => {
        if (newFeature.name !== '') {
            setFeatures(prevState => {
                return [...prevState, newFeature]
            })
        }
    }, [newFeature])

    // useEffect( () => {
    //     console.log('Use Effect randered')
    //     return () => {
    //         // Acest cod se va executa inaintea celui de mai sus, mai putin prima data
    //         console.log('Triggered before this effect, except the first time')
    //     }
    // }, [features[0].state])
    // Cu un array de dependinte gol, se va randa o singura data la incarcarea paginii

    //  Cu un element in arrayl de dependinte, se va executa codul de fiecare data cand valoarea se modifica
    // console.log('Features page randered')

    const toggleLights = () => {
        setFeatures(prevState => {
            const updatedFeatures = prevState.map(feature => {
                if (feature.name === 'Toggle Lights') {
                    feature.state = !feature.state;
                    feature.action = `Turn the lights ${feature.state ? 'off' : 'on'}`
                }
                return feature
            })

            return updatedFeatures
        })
    }

    const toggleAc = () => {
        setFeatures((prevState) => {
            const updatedFeatures = prevState.map((feature) => {
                if (feature.name === 'Toggle AC') {
                    feature.state = !feature.state;
                    feature.action = `Turn the AC ${feature.state ? 'off' : 'on'}`
                }

                return feature
            })

            return updatedFeatures;
        })
    }

    const toggleTheAction = (value) => {
        toggleAction(value)

        switch (value) {
            case "Toggle Lights":
                toggleLights()
                break;
            case "Toggle AC":
                toggleAc();
                break
        }
    }

    return (
        <div className="container">
            <div className="features">
                {features.map((feature) => {
                    return (
                        <Feature
                            name={feature.name}
                            action={feature.action}
                            key={feature.id}
                            state={feature.state}
                            toggleAction={toggleTheAction} />
                    )
                })}
            </div>
        </div>
    )
}

Features.propTypes = {
    toggleAction: PropTypes.func.isRequired,
    newFeature: PropTypes.object
}

export default Features;