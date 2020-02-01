import React from 'react'

const Text = props => {
	let text = ( 
		<mesh position={[1,1,10]}>
			<boxBufferGeometry attach="geometry" args={[2,2,2]}/>
			<meshStandardMaterial attach="material" color={"red"}/>
		</mesh>
	);
	return text
}

export default Text;