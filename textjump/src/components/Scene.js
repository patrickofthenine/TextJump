import React, { useState } from 'react';
import { useFrame } from 'react-three-fiber';
import Text from './Text';
import Words from './hoc/Words';

const Scene = props => {
	const [sceneState, setSceneState] = useState({
		text: props.source || null
	}) 
	
	const getText = () => {
		return	
	}

	useFrame( ()=>{
		getText()
	})
	return (
		<ambientLight>
		</ambientLight>
	)
}

export default Scene;