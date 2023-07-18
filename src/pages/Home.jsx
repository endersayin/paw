import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react'
import React, { useEffect, useState } from 'react'

export const Home = () => {
	const [data, setData] = useState('')

	useEffect(() => {
		console.log(data)
	}, [data])
	return (
		<IonPage>
			<IonContent>
				<IonGrid style={{ marginTop: '40%' }}>
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonAvatar style={{ margin: '5vh 0' }}>
							<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
						</IonAvatar>
					</IonRow>
					<IonRow style={{ margin: '0 5vh' }}>
						<IonCol>
							<IonInput defaultValue={data} label="E-postanız" onIonInput={e => setData(e.detail.value)} type="email" labelPlacement="floating" counter={true} maxlength={20}></IonInput>
						</IonCol>
					</IonRow>
					<IonRow style={{ margin: '0 5vh' }}>
						<IonCol>
							<IonInput defaultValue={data} label="Şifreniz" onIonInput={e => setData(e.detail.value)} type="password" labelPlacement="floating" counter={true} maxlength={20}></IonInput>
						</IonCol>
					</IonRow>
					<IonRow style={{ margin: '10% 5vh' }}>
						<IonCol>
							<IonButton onClick={() => console.log(data)} expand="block">
								Giriş Yap
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}
export default Home
