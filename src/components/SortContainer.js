import { getFullSortedConfig } from '../utils';
import Controls from './Controls';
import NumberBars from './NumberBars';
import { useEffect, useState } from 'react';

const numbers = [98, 14, 27, 16, 23, 45, 5, 9];

function SortContainer() {
  const [sortedConfig, setSortedConfig] = useState([]);
  const [currentMove, setCurrentMove] = useState(1);

  const handleNext = () => {
    if (currentMove + 1 >= sortedConfig.length) {
      return;
    }

    setCurrentMove(currentMove + 1);
  }

  const handlePrevious = () => {
    if (currentMove - 1 < 0) {
      return;
    }

    setCurrentMove(currentMove - 1);
  }

  useEffect(() => {
    setSortedConfig(getFullSortedConfig(numbers));
  }, []);

  console.log(sortedConfig, currentMove);

  if (!sortedConfig.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>Moves: {currentMove} / {sortedConfig.length}</div>
      <NumberBars 
        numbers={numbers}
        sortedArr={sortedConfig[currentMove].data}
        sortedUntil={sortedConfig[currentMove].sortedUntil}
        currentIndexBeingSwapped={sortedConfig[currentMove].currentIndexBeingSwapped}
      />
      <Controls onNext={handleNext} onPrevious={handlePrevious} />
    </div>
  );
}

export default SortContainer;
