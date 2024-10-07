import React, { useState, useRef, useEffect, memo } from "react"
import { motion, useAnimation, useAnimationControls } from "framer-motion"


const SlotMachine = ({ startGame, prizeName, handleEndGame }) => {
	const dataItems = ['win', 'item1', 'item2' , 'item3', 'item4' , 'item5', 'item6' , 'item7' ]
	const [result, setResult] = useState([0, 0, 0])
	const controls = useAnimationControls();
	const [indices, setIndices] = useState({
		0: dataItems.slice(0).sort(() => Math.random() - 0.5),
		1: dataItems.slice(0).sort(() => Math.random() - 0.5),
		2: dataItems.slice(0).sort(() => Math.random() - 0.5)
	});


	const variants = {
		initial: () => ({
			y: "0%",
		}),
		animate: {
			y: "-700%",
			transition: {
				repeat: Infinity,
				repeatType: "loop",
				duration: .3,
				ease: "linear",
			},
		},
		end: (i) => ({
			y: -i * 100 + "%",
			transition: {
				type: "spring",
				damping: 15,
				stiffness: 500,
				restDelta: 0.001
			},
		})
	};

	const generateResult = (val) => {
		switch (val) {
		
			case 'win':
				setResult([indices[0].indexOf('win'), indices[1].indexOf('win'), indices[2].indexOf('win')]);
				break;
			case 'khongtrung':
				let tmp = [];
				for (let prop in indices) {
					let randomIndex = Math.floor(Math.random() * indices[prop].length);
					console.log('randomIndex', randomIndex)

					let getName = indices[prop][randomIndex];
					console.log('getName', getName)

					while (tmp.includes(getName)) {
						randomIndex = Math.floor(Math.random() * indices[prop].length);
						getName = indices[prop][randomIndex];
					}
					tmp.push(randomIndex);
				}
				console.log('tmp', tmp);
				setResult(tmp);
				break;

		}
	}


	const startSpinning = () => {
		controls.set("initial");
		controls.start("animate");
	}

	useEffect(() => {
		controls.start('end');
		handleEndGame(false)
	}, [result])

	useEffect(() => {
		if (startGame) startSpinning();
	}, [startGame])


	useEffect(() => {
		console.log('prizeName', prizeName)
		generateResult(prizeName);
		console.log('result', result)
	}, [prizeName])



	return (
		<div className="slot-machine-container">
			{
				result.map((ele, index) => {
					return (
						<motion.div className="slot-items-wrap"
							variants={variants}
							initial="initial"
							animate={controls}
							custom={ele}
							key={index}
						>
							{indices[index].map((name, i) => (
								<img
									key={i}
									className="w-100"
									src={`/slot-machine/${name}.png`}
								/>
							))}
						</motion.div>
					)
				})
			}
		</div >
	)
}

export default SlotMachine;