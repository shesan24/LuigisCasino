import MarioIcon from '../assets/marioicon.png';
import MushroomIcon from '../assets/mushroomicon.png';
import StarIcon from '../assets/staricon.png';
import LuigiIcon from '../assets/luigiicon.png';
import FireFlowerIcon from '../assets/fireflowericon.png';
import CloudIcon from '../assets/cloudicon.png';

export default function iconSelector(iconName) {
  switch (iconName) {
    case 'mario':
      return MarioIcon;

    case 'mushroom':
      return MushroomIcon;

    case 'star':
      return StarIcon;

    case 'luigi':
      return LuigiIcon;

    case 'fireflower':
      return FireFlowerIcon;

    case 'cloud':
      return CloudIcon;

    default:
      return;
  }
}
