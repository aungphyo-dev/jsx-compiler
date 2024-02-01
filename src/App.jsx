import Button from './Button';

const App = () => (
    <div className="app">
        <Button onClick={() => alert(1)}>Click 11</Button>
        <Button onClick={() => alert(2)}>Click 12</Button>
        <Button onClick={() => alert(3)}>Click 13</Button>
    </div>
);

const rootElement = document.getElementById('root');
rootElement.appendChild(<App />);

export default App;
