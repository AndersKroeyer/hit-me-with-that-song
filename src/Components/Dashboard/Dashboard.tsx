/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import ReactCardFlip from 'react-card-flip';
import { Avatar } from '@mui/material';
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

export default function Dashboard() {
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

  const getGrowth = (textlength: number): number => {
    if (textlength > 9) {
      return 0.1;
    }
    const olo = 1 - parseFloat(`0.${textlength}`);
    return olo;
  };

  const content =
    dataFromBroadCast.showTrivia !== TriviaState.Hidden ? (
      <div css={styles.triviaContainer}>
        <span css={styles.triviaText}>
          {dataFromBroadCast.showTrivia === TriviaState.Question
            ? dataFromBroadCast.trivia
            : dataFromBroadCast.triviaAnswer}
        </span>
      </div>
    ) : (
      <div css={styles.wordsContainer}>
        {dataFromBroadCast.words.map((word, index) => (
          <div
            css={styles.cardFlipContainer}
            style={{ flexGrow: getGrowth(word.text.length) }}
          >
            <ReactCardFlip isFlipped={word.visible} flipDirection="horizontal">
              <Word
                visible={false}
                text={word.text}
                stopWord={word.stopWord && word.visible}
              />
              <Word
                visible
                text={word.text}
                stopWord={word.stopWord && word.visible}
              />
            </ReactCardFlip>
          </div>
        ))}
      </div>
    );

  return (
    <div style={{ overflowY: 'hidden' }}>
      <div
        css={styles.pointsContainer}
        style={{ display: dataFromBroadCast.words.length ? 'flex' : 'none' }}
      >
        <Avatar
          alt="Sascha Dupont"
          css={styles.avatar}
          src="Images/sashaDupont.png"
        />
        <div css={styles.nameText}>Sascha Dupont {teamPoints.team1Points}</div>
        <div css={styles.nameText} style={{ marginLeft: 'auto' }}>
          {teamPoints.team2Points} Sigurd Barrett
        </div>
        <Avatar
          alt="Sigurd Barrett"
          style={{ marginRight: '14px' }}
          css={styles.avatar}
          src="Images/sigurd.png"
        />
      </div>
      {content}
      <ReactPlayer playing={playing} url={musicUrl} onPlay={onMusicStart} />
    </div>
  );
}
