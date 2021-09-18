import { Paper } from '@material-ui/core';
import { useReducer, useEffect, useState } from 'react';
import Config from '../../config';
import { Song, Word } from '../types';
import { styles } from './ControlPanel.styles';
import { SongData } from '../../Data/TDC2021';
import ToggleWord from './ToggleWord.tsx/ToggleWord';
import TeamPointControl from './TeamPointControl/TeamPointControl';
import { sendPoints, sendSong } from '../../Utilities/Broadcaster';

const TOGGLE_WORD_ACTION = 'toggleWordVisiblity';
interface toggleWordAction {
  wordIndex: number;
  type: typeof TOGGLE_WORD_ACTION;
  visibility: boolean;
}
const SET_SONG_ACTION = 'setSong';
interface setSongAction {
  type: typeof SET_SONG_ACTION;
  song: Song;
}
const TOGGLE_TRIVIA_ACTION = 'toggleTrivia';
interface toggleTriviaAction {
  type: typeof TOGGLE_TRIVIA_ACTION;
  visibility: boolean;
}

type validActions = toggleWordAction | setSongAction | toggleTriviaAction;

const toggleWordVisiblity = (
  words: Word[],
  index: number,
  visibility: boolean,
) =>
  words.map((word, idx) =>
    index === idx ? { ...word, visible: visibility } : { ...word },
  );

function reducer(state: Song, action: validActions): Song {
  switch (action.type) {
    case TOGGLE_WORD_ACTION:
      return {
        ...state,
        words: toggleWordVisiblity(
          state.words,
          action.wordIndex,
          action.visibility,
        ),
      };
    case SET_SONG_ACTION:
      return action.song;
    case TOGGLE_TRIVIA_ACTION:
      return { ...state, showTrivia: action.visibility };
    default:
      throw new Error();
  }
}

function ControlPanel() {
  const [activeSong, dispatch] = useReducer(reducer, SongData[0]);
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);

  const handleSongClick = (index: number) =>
    dispatch({ type: SET_SONG_ACTION, song: SongData[index] });
  const handleWordClick = (index: number, visible: boolean) =>
    dispatch({
      type: TOGGLE_WORD_ACTION,
      wordIndex: index,
      visibility: visible,
    });
  const handleTriviaClick = (visible: boolean) =>
    dispatch({ type: TOGGLE_TRIVIA_ACTION, visibility: visible });

  useEffect(() => {
    sendSong(activeSong);
  }, [activeSong]);

  useEffect(() => {
    sendPoints({ team1Points, team2Points });
  }, [team1Points, team2Points]);

  const classes = styles();

  return (
    <div className={classes.outerMostContainer}>
      <div className={classes.controlPanelContainer}>
        {/* songpicker */}
        <div className={classes.columnContainer}>
          {SongData.map((song, idx) => (
            <Paper
              elevation={1}
              className={classes.pickSong}
              onClick={() => handleSongClick(idx)}
            >
              <span className={classes.songTitle}>{song.author}</span>
              <span>{song.title}</span>
            </Paper>
          ))}
        </div>

        {/* toggle visibility  */}
        <div className={classes.wordColumnContainer}>
          {activeSong.words.map((word, idx) => (
            <ToggleWord
              idx={idx}
              handleWordClick={() => handleWordClick(idx, !word.visible)}
              stopWord={word.stopWord}
              visible={word.visible}
              text={word.text}
            />
          ))}
        </div>

        {/* trivia + points */}
        <div className={classes.columnContainer}>
          <Paper
            elevation={2}
            className={classes.triviaToggle}
            onClick={() => handleTriviaClick(!activeSong.showTrivia)}
          >
            <div style={{ color: activeSong.showTrivia ? 'green' : 'red' }}>
              Trivia
            </div>
          </Paper>
        </div>

        <div className={classes.columnContainer}>
          <TeamPointControl
            name="Sasha Dupont"
            points={team1Points}
            handlePointChange={(amount) => setTeam1Points(team1Points + amount)}
          />
          <TeamPointControl
            name="Sigurd Bertet"
            points={team2Points}
            handlePointChange={(amount) => setTeam2Points(team2Points + amount)}
          />
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
