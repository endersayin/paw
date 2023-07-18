import { IonAlert, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonItem, IonPage } from '@ionic/react'
import React from 'react'

export const Home = () => {
	return (
		<IonPage scrollY>
			<IonContent>
				<IonCardContent>
					<IonCard>
						<div>
							<img alt="Silhouette of mountains" src="./kedi-01.jpeg" />
							<IonCardHeader>
								<IonCardTitle>Kedi</IonCardTitle>
								<IonCardSubtitle>Kedi 123456</IonCardSubtitle>
							</IonCardHeader>
							<IonItem>
								<IonChip color="medium">Mavi</IonChip>
								<IonChip color="medium">Scottish</IonChip>
								<IonChip color="medium">Kedi</IonChip>
							</IonItem>

							<IonCardContent>
								<p>Yapılan araştırmalar kedilerin köpeklerden çok daha bağımsız olduğunu gösteriyor. Kedilere bir şey yaptırmak zordur; onlar kendi bildiklerini yapar.</p>
								<div>
									<IonButton style={{ marginTop: '50px' }} id="present-alert" size="medium" expand="block">
										Click Me
									</IonButton>
									<IonAlert trigger="present-alert" header="Alert" subHeader="Important message" message="This is an alert!" buttons={['OK']}></IonAlert>
								</div>
							</IonCardContent>
						</div>
					</IonCard>
				</IonCardContent>
				<IonCardContent>
					<IonCard>
						<div>
							<img alt="Silhouette of mountains" src="./kedi-01.jpeg" />
							<IonCardHeader>
								<IonCardTitle>Kedi</IonCardTitle>
								<IonCardSubtitle>Kedi 123456</IonCardSubtitle>
							</IonCardHeader>
							<IonItem>
								<IonChip color="medium">Mavi</IonChip>
								<IonChip color="medium">Scottish</IonChip>
								<IonChip color="medium">Kedi</IonChip>
							</IonItem>

							<IonCardContent>
								<p>Yapılan araştırmalar kedilerin köpeklerden çok daha bağımsız olduğunu gösteriyor. Kedilere bir şey yaptırmak zordur; onlar kendi bildiklerini yapar.</p>
								<div>
									<IonButton style={{ marginTop: '50px' }} id="present-alert" size="medium" expand="block">
										Click Me
									</IonButton>
									<IonAlert trigger="present-alert" header="Alert" subHeader="Important message" message="This is an alert!" buttons={['OK']}></IonAlert>
								</div>
							</IonCardContent>
						</div>
					</IonCard>
				</IonCardContent>
			</IonContent>
		</IonPage>
	)
}
export default Home
