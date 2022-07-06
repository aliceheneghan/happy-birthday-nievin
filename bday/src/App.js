import './App.css'

const playlist = [{id:1, url:'https://www.youtube.com/watch?v=2oyhlad64-s', artist: 'Paco de Lucia', title: 'Entre dos aguas'}, 
{id:2, url:'https://www.youtube.com/watch?v=ImllpvDwbQ8', artist: 'Tom Misch & Yussef Dayes', title: 'Nightrider (feat. Freddie Gibbs)'}, 
{id:3, url:'https://www.youtube.com/watch?v=WlGiOiRQNhI', artist: 'Soren Madsen', title: 'Nothing Else Matters by Metallica'}, 
{id:4, url:'https://www.youtube.com/watch?v=s_BU8YCjV1M', artist: 'The Calling', title: 'Wherever You Will Go'}, 
{id:5, url:'https://www.youtube.com/watch?v=e26zZ83Oh6Y&t=1854s', artist: 'Ana Vidović', title: ''}, 
{id:6, url:'https://www.youtube.com/watch?v=tf6mMtPzzD0', artist: 'Les Négresses Vertes', title: 'Face à la mer (Massive Attack Remix)'}, 
{id:7, url:'https://www.youtube.com/watch?v=lrMoOVWaD-U', artist: 'Jorge Glem Duo ', title: 'Zumba Que Zumba'}, 
{id:8, url:'https://www.youtube.com/watch?v=-LkMOjjdVVg', artist: 'Dark Hypnotic Blues Lap Steel ', title: 'Dark Solace'}, 
{id:9, url:'https://www.youtube.com/watch?v=oc50wHexbwg', artist: 'Khruangbin', title: 'Time (You and I)'}, 
{id:10, url:'https://www.youtube.com/watch?v=nPLV7lGbmT4', artist: 'Santana', title: 'Maria Maria ft. The Product G&B'},
{id:11, url:'https://www.youtube.com/watch?v=NWEonM7S9pE', artist: 'Al Marconi', title: 'OMEGA REQUIEM'},
{id:12, url:'https://www.youtube.com/watch?v=2oyhlad64-s', artist: 'Paco de Lucia', title: 'Entre dos aguas'}, 
{id:13, url:'https://www.youtube.com/watch?v=2oyhlad64-s', artist: 'Paco de Lucia', title: 'Entre dos aguas'} ]

const playlistinHTML = playlist.map((track => {
  return <li key={track.id}>{track.artist}<br/>{track.title}<br/><a href={track.url}>Listen</a></li>
}))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-guitar">
          <p className="bday-wish">Happy<br/><br/>birthday<br/><br/>Nievin!</p>
        </div>
        <div className="playlist">
          <ul className="list">{playlistinHTML}</ul>
          </div>
      </header>
    </div>
  );
}

export default App;
