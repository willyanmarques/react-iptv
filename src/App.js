import React, { Component } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import axios from 'axios';

class App extends Component {

  async componentDidMount(){
    console.log('### Init...');
    await this.getChannels();
  }

  async getChannels(){
    const res = await axios.get('https://gitlab.com/MateusXD/IMDS/raw/master/IMDSLISTA');
    // console.log('### res: ' + JSON.stringify(res).replace("\\n", ''));
    //console.log('### res: ' + res.data);
    const data = res.data;
    res.forEach(element => {
      console.log('### item: ' + element);
    });
  }

  render() {
    return (
      <div id="container">
        <h3>React IPTV</h3>
        {/* canal da espanha */}
        <ReactHlsPlayer src="http://hlsliveamdgl8-lh.akamaihd.net/i/hlsdvrlive_1@583030/index_1500_av-p.m3u8?IMDSFULL"
          autoPlay={false}
          controls={true}
          width="60%"
          height="auto" />
      </div>
    );
  }

}

export default App;
