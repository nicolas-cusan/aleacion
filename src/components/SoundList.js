import React, { Component } from 'react';
import { Howl } from 'howler';

class SoundList extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        {
          id: 1,
          name: 'Sound 1',
          duration: 0.1,
          file: '/sound/birds.mp3',
          playing: false,
        },
        {
          id: 2,
          name: 'Sound 2',
          duration: 0.2,
          file: '/sound/coucou.mp3',
          playing: false,
        },
      ],
    };
  }

  componentDidMount() {
    const list = this.state.list.map(item => {
      const sound = new Howl({
        src: [item.file],
        loop: true,
      });

      item.sound = sound;
      return item;
    });

    this.setState({ list });
  }

  toggleSound = id => {
    const item = this.state.list.find(item => item.id === id);

    if (item.sound.playing()) {
      item.sound.stop();
    } else {
      item.sound.play();
    }
  };

  render() {
    return (
      <ul>
        {this.state.list.map(item => (
          <li key={item.id}>
            <button onClick={this.toggleSound.bind(this, item.id)}>
              {item.playing ? 'Pause' : 'Play'}
            </button>
            <span>{item.name}</span>
            <span>{item.duration}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default SoundList;
