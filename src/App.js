import React, { Component } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import axios from 'axios';
import { LionPlayer } from 'lion-player';
import 'lion-player/dist/lion-skin.min.css';

const channel = [
  {
    src: 'http://cdn.teambr.live:80/live/7f11mm3r/wto7gqld/165.m3u8',
    type: 'application/x-mpegURL',
  }
];

const config = {
  autoplay: true,
  controls: true,
  controlBar: {
    children: [
      'playToggle',
      'volumePanel',
      'currentTimeDisplay',
      'timeDivider',
      'durationDisplay',
      'progressControl',
      'liveDisplay',
      'customControlSpacer',
      'chaptersButton',
      'descriptionsButton',
      'subsCapsButton',
      'audioTrackButton',
      'playbackRateMenuButton',
      'fullscreenToggle',
    ],
    progressControl: {
      seekBar: true
    }
  },
  fluid: true,
  inactivityTimeout: 2500,
  preload: 'auto',
  width: 100,
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
  html5: {
    vhs: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      overrideNative: true,
    },
  },
  plugins: {
    qualityLevel: {},
    hlsQualitySelector: {
      displayCurrentQuality: true,
    },
  }
}

class App extends Component {

  async componentDidMount() {
    console.log('### Init...');
    await this.getChannels();
  }

  async getChannels() {
    //const res = await axios.get('https://gitlab.com/MateusXD/IMDS/raw/master/IMDSLISTA');
    const res = await axios.get('http://localhost:3333/playlist-iptv');
    //console.log('### res: ' + JSON.stringify(res.data.items));
    const data = res.data.items;
    data.forEach(element => {
      console.log('### canal: ' + element.name + ' ### url: ' + element.url);
    });
  }

  render() {
    return (
      <div id="container">
        <h3>React IPTV</h3>
        {/* canal da espanha */}
        {/* <ReactHlsPlayer src="http://hlsliveamdgl8-lh.akamaihd.net/i/hlsdvrlive_1@583030/index_1500_av-p.m3u8?IMDSFULL" */}
        {/* canal da italia */}
        {/* <ReactHlsPlayer src="http://cdn.teambr.live:80/live/7f11mm3r/wto7gqld/489.m3u8"
          autoPlay={true}
          controls={true}
          width="60%"
          height="auto" /> */}
        <LionPlayer sources={channel} {...config} />
      </div>
    );
  }

}

export default App;
