import Entete from './components/Entete';
import ListeTaches from './components/ListeTaches';
import Pied from './components/Pied';

function App() {
  return (
    <>
      <Entete />
      <main>
        <ListeTaches />
      </main>
      <Pied />
    </>
  );
}

export default App;