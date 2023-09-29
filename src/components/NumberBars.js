const Bar = ({ height, color, positionOffset }) => {
  return (
    <div style={{ height: `${height * 4}px`, backgroundColor: color, width: '24px', position: 'absolute', left: `${positionOffset * 24}px` }} className="bar">{height}</div>
  );
}

const findNumbersIndex = (arr, number) => {
  for (let i=0;i<arr.length;i++) {
    if (arr[i] === number) {
      return i;
    }
  }
}

function NumberBars({ numbers, sortedUntil, currentIndexBeingSwapped, sortedArr }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', top: '100px', left: '500px' }}>
      {numbers.map((number, index) => {
        return (
          <Bar 
            height={number} 
            color={currentIndexBeingSwapped === index ? 'red' : (index <= sortedUntil ? 'aqua' : 'yellow')}
            positionOffset={findNumbersIndex(sortedArr, number)}
          />
        );
      })}
    </div>
  );
}

export default NumberBars;
