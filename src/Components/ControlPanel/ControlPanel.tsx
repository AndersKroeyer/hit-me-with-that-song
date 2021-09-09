import Config from '../../config';

function ControlPanel() {
  const onclick = () => {
    console.log('initializing');
    const bc = new BroadcastChannel(Config.broadcastChannelId);
    console.log('broadcasting');
    bc.postMessage('Hello');
    bc.postMessage({ person: 'anders' });
    console.log('broadcasting done');
    bc.close();
  };

  return (
    <div>
      <button type="button" onClick={onclick}>
        Next stage
      </button>
    </div>
  );
}

export default ControlPanel;
