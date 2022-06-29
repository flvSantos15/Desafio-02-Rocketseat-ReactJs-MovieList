import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo } from 'react';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
interface ButtonProps {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

interface ButonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Btn: ButtonProps
}

// export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
function ButtonComponent({ Btn, ...rest }: ButonProps) {
  return (
    <button type="button" {...(Btn.selected && { className: 'selected' })} {...rest}>
      <Icon name={Btn.iconName} color={Btn.selected ? '#FAE800' : '#FBFBFB'} />
      {Btn.title}
    </button>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.Btn, nextProps.Btn)
})