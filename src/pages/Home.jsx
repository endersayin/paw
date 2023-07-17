import { IonButton } from '@ionic/react'
import { useEffect, useState } from 'react'

export const Home = () => {
	const [data, setData] = useState(0)

	useEffect(() => {
		setData(100)
	}, [])

	return (
		<div>
			<div>
				Sayaç : {data} <IonButton onClick={() => setData(data + 1)}>TIKLA</IonButton>
			</div>
			<div>Sayaç : {data}</div>
			<div>Sayaç : {data}</div>
			<div>Sayaç : {data}</div>
			<div>Sayaç : {data}</div>
		</div>
	)
}

export default Home
