import { Paper } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import React, { useReducer, useEffect, useState } from 'react';
import { Song, TriviaState, Word } from '../types';
import { styles } from './ControlPanel.styles';
import { SongData } from '../../Data/TDC2021';
import ToggleWord from './ToggleWord.tsx/ToggleWord';
import TeamPointControl from './TeamPointControl/TeamPointControl';
import {
  sendGuessMusic,
  sendIntroMusic,
  sendPoints,
  sendSong,
  sendStartMusic,
} from '../../Utilities/Broadcaster';

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
  triviaState: TriviaState;
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
      return { ...state, showTrivia: action.triviaState };
    default:
      throw new Error();
  }
}

const initialState: Song = {
  author: '',
  showTrivia: TriviaState.Hidden,
  title: '',
  trivia: '',
  triviaAnswer: '',
  words: [],
  url: 'https://www.youtube.com/watch?v=rUPJPXkiMMY&t=7', // intro song
  playtime: 15,
};

function ControlPanel() {
  const [activeSong, dispatch] = useReducer(reducer, initialState);
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);

  const handleSongClick = (index: number) =>
    dispatch({ type: SET_SONG_ACTION, song: SongData[index] });
  const handleWordClick = (
    index: number,
    visible: boolean,
    stopWord: boolean,
  ) => {
    if (visible) {
      sendGuessMusic({ isStopWord: stopWord });
    }
    dispatch({
      type: TOGGLE_WORD_ACTION,
      wordIndex: index,
      visibility: visible,
    });
  };

  const handleTriviaClick = (state: TriviaState) =>
    dispatch({ type: TOGGLE_TRIVIA_ACTION, triviaState: state });

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
          <div className={classes.columnScrollContainer}>
            {SongData.map((song, idx) => (
              <Paper
                elevation={1}
                className={classes.pickSong}
                onClick={() => handleSongClick(idx)}
                key={song.title}
                style={{
                  borderLeft:
                    song.title === activeSong.title ? '5px solid green' : '',
                }}
              >
                <span className={classes.songTitle}>{song.author}</span>
                <span>{song.title}</span>
              </Paper>
            ))}
          </div>
        </div>

        {/* toggle visibility  */}
        <div className={classes.wordColumnContainer}>
          {activeSong.words.map((word, idx) => (
            <ToggleWord
              idx={idx}
              handleWordClick={() =>
                handleWordClick(idx, !word.visible, word.stopWord)
              }
              stopWord={word.stopWord}
              visible={word.visible}
              text={word.text}
              key={uuidv4()}
            />
          ))}
        </div>

        <div className={classes.columnContainer}>
          <Paper
            elevation={2}
            className={classes.toggleButton}
            onClick={() => sendIntroMusic()}
            style={{ marginBottom: '25px' }}
          >
            <div>Play intro</div>
          </Paper>
          <Paper
            elevation={2}
            className={classes.toggleButton}
            onClick={() =>
              sendStartMusic({
                url: activeSong.url,
                playtime: activeSong.playtime,
              })
            }
            style={{ marginBottom: '150px' }}
          >
            <div>Play song</div>
          </Paper>

          {(Object.keys(TriviaState) as Array<keyof typeof TriviaState>).map(
            (key) => (
              <Paper
                elevation={2}
                className={classes.toggleButton}
                onClick={() => handleTriviaClick(TriviaState[key])}
                style={{ marginBottom: '20px' }}
                key={uuidv4()}
              >
                <div
                  style={{
                    color:
                      activeSong.showTrivia === TriviaState[key]
                        ? 'green'
                        : 'red',
                  }}
                >
                  {TriviaState[key]}
                </div>
              </Paper>
            ),
          )}
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
