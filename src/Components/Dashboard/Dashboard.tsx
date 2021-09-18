import { useEffect, useState } from 'react';
import styles from './Dashboard.styles';
import Word from '../Word/Word';
import { DashboardState, TeamPoints } from '../types';
import { subscribeToBroadcast } from '../../Utilities/Broadcaster';

const initialState: DashboardState = {
  words: [],
  trivia: '',
  showTrivia: false,
};

function Dashboard() {
  const [dataFromBroadCast, setDataFromBroadCast] =
    useState<DashboardState>(initialState);
  const [teamPoints, setTeamPoints] = useState<TeamPoints>({
    team1Points: 0,
    team2Points: 0,
  });

  useEffect(() => {
    const closeConnection = subscribeToBroadcast(
      (song) => setDataFromBroadCast(song),
      (points) => console.log('got points', setTeamPoints(points)),
    );
    return () => {
      closeConnection();
    };
  }, []);

  const classes = styles();

  const content = dataFromBroadCast.showTrivia ? (
    <div className={classes.triviaContainer}>
      <span className={classes.triviaText}>{dataFromBroadCast.trivia}</span>
    </div>
  ) : (
    <div className={classes.wordsContainer}>
      {dataFromBroadCast.words.map((word) => (
        <Word
          visible={word.visible}
          text={word.text}
          stopWord={word.stopWord && word.visible}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className={classes.pointsContainer}>
        <div>Sasha Dupont: {teamPoints.team1Points}</div>
        <div>Sigurd Bertet: {teamPoints.team2Points}</div>
      </div>
      {content}
    </div>
  );
}

export default Dashboard;
