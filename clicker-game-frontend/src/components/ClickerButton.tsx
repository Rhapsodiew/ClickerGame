import React from 'react';

interface ClickerButtonProps {
  onClick: () => void;
}

const ClickerButton: React.FC<ClickerButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Cliquez pour gagner des points!</button>
  );
};

export default ClickerButton;