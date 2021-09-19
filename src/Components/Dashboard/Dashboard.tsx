import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from './Dashboard.styles';
import Word from '../Word/Word';
import { DashboardState, Music, TeamPoints } from '../types';
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
  const [playing, setPlaying] = useState(false);
  const [musicUrl, setMusicUrl] = useState('');

  const playMusic = (music: Music) => {
    setPlaying(true);
    setMusicUrl(music.url);
    setTimeout(() => {
      setPlaying(false);
    }, music.playtime * 1000);
  };

  useEffect(() => {
    const closeConnection = subscribeToBroadcast(
      setDataFromBroadCast,
      setTeamPoints,
      playMusic,
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
    <div style={{ overflowY: 'hidden' }}>
      <div className={classes.pointsContainer}>
        <div>Sasha Dupont: {teamPoints.team1Points}</div>
        <div>Sigurd Bertet: {teamPoints.team2Points}</div>
      </div>
      {content}
      <ReactPlayer playing={playing} url={musicUrl} />
    </div>
  );
}

export default Dashboard;
