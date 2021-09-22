import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './Dashboard.styles';
import Word from '../Word/Word';
import { DashboardState, Music, TeamPoints, TriviaState } from '../types';
import { subscribeToBroadcast } from '../../Utilities/Broadcaster';

const initialState: DashboardState = {
  words: [],
  trivia: '',
  triviaAnswer: '',
  showTrivia: TriviaState.Hidden,
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
  const [playTime, setPlaytime] = useState(0);

  const playMusic = (music: Music) => {
    setMusicUrl(music.url);
    setPlaytime(music.playtime);
    setPlaying(true);
  };

  const onMusicStart = () => {
    setTimeout(() => {
      setPlaying(false);
    }, playTime * 1000);
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

  const content =
    dataFromBroadCast.showTrivia !== TriviaState.Hidden ? (
      <div className={classes.triviaContainer}>
        <span className={classes.triviaText}>
          {dataFromBroadCast.showTrivia === TriviaState.Question
            ? dataFromBroadCast.trivia
            : dataFromBroadCast.triviaAnswer}
        </span>
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
      <div
        className={classes.pointsContainer}
        style={{ display: dataFromBroadCast.words.length ? 'block' : 'none' }}
      >
        <div>Sasha Dupont: {teamPoints.team1Points}</div>
        <div>Sigurd Bertet: {teamPoints.team2Points}</div>
      </div>
      {content}
      <ReactPlayer playing={playing} url={musicUrl} onPlay={onMusicStart} />
    </div>
  );
}

export default Dashboard;
