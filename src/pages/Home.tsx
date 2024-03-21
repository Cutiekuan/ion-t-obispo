import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css'; // Import your CSS file for styling

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
        <img alt="Silhouette of mountains" id="profile_pic" src="../src/assets/img/PROFPIC_AILEEN_PNG.png" />
          <div className="content">
            <h1>Welcome to My Home Page</h1>
            <p>
              I am Aileen Obispo, a 3rd-year IT student at NBSC. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Phasellus non
              convallis libero.
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
