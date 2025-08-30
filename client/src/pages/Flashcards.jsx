import { useState } from 'react';

const Flashcards = () => {
  const [decks, setDecks] = useState([{ title: 'Core Python', cards: [{ front: 'What is a list?', back: 'A mutable sequence.' }] }]);
  const [deckTitle, setDeckTitle] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [selected, setSelected] = useState(0);
  const [studyIdx, setStudyIdx] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [mode, setMode] = useState('list');

  const addDeck = () => {
    if (!deckTitle) return;
    setDecks([...decks, { title: deckTitle, cards: [] }]);
    setDeckTitle('');
  };
  const addCard = () => {
    if (!front || !back) return;
    const newDecks = [...decks];
    newDecks[selected].cards.push({ front, back });
    setDecks(newDecks);
    setFront(''); setBack('');
  };
  const startStudy = (idx) => { setSelected(idx); setStudyIdx(0); setShowBack(false); setMode('study'); };
  const nextCard = () => { setShowBack(false); setStudyIdx(studyIdx + 1); };
  if (mode === 'study') {
    const deck = decks[selected];
    if (!deck.cards.length) return <div>No cards in this deck. <button onClick={()=>setMode('list')}>Back</button></div>;
    const card = deck.cards[studyIdx];
    return (
      <div>
        <h2>Study: {deck.title}</h2>
        <div style={{margin:'16px 0',padding:12,background:'#f6f6f6'}}>
          <div>{showBack ? card.back : card.front}</div>
        </div>
        {!showBack ? <button onClick={()=>setShowBack(true)}>Show Answer</button> : <button onClick={nextCard} disabled={studyIdx+1>=deck.cards.length}>Next</button>}
        <button onClick={()=>setMode('list')} style={{marginLeft:8}}>Back to Decks</button>
        <div style={{marginTop:8}}>Card {studyIdx+1} of {deck.cards.length}</div>
      </div>
    );
  }
  return (
    <div>
      <h2>Flashcards</h2>
      <div>
        <input placeholder="New deck title" value={deckTitle} onChange={e=>setDeckTitle(e.target.value)} />
        <button onClick={addDeck}>Create Deck</button>
      </div>
      <div style={{margin:'16px 0'}}>
        {decks.map((d,i)=>(
          <div key={i} style={{marginBottom:8}}>
            <b>{d.title}</b> ({d.cards.length} cards)
            <button style={{marginLeft:8}} onClick={()=>startStudy(i)}>Study</button>
            {i===selected && (
              <span style={{marginLeft:8}}>
                <input placeholder="Front" value={front} onChange={e=>setFront(e.target.value)} />
                <input placeholder="Back" value={back} onChange={e=>setBack(e.target.value)} />
                <button onClick={addCard}>Add Card</button>
              </span>
            )}
          </div>
        ))}
      </div>
      <div>Decks: {decks.length} | Total cards: {decks.reduce((a,d)=>a+d.cards.length,0)}</div>
    </div>
  );
};

export default Flashcards;
